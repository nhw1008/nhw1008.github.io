# GitHub Pages MIME 타입 오류 트러블슈팅 문서

## 문제 개요

GitHub Pages에 배포된 React + Vite 프로젝트에서 다음 오류가 발생했습니다:

```
Failed to load module script: Expected a JavaScript-or-Wasm module script 
but the server responded with a MIME type of "application/octet-stream". 
Strict MIME type checking is enforced for module scripts per HTML spec.
```

브라우저 개발자 도구에서 확인한 결과:
- `main.tsx` 파일이 직접 요청되고 있음
- GitHub Pages가 `.tsx` 파일을 `application/octet-stream` MIME 타입으로 제공
- 결과적으로 빈 화면만 표시됨

## 근본 원인

### 1차 원인: 빌드 실패 (직접적 원인)

GitHub Actions 빌드가 실패하고 있었습니다:
```
Dependencies lock file is not found. 
Supported file patterns: package-lock.json, npm-shrinkwrap.json, yarn.lock
```

- `npm ci` 명령어는 `package-lock.json` 파일이 필수임
- Lock 파일이 없어 빌드 단계 자체가 실행되지 않음
- 따라서 Vite의 HTML 변환 과정이 실행되지 않음
- 이전 빌드 결과물 또는 변환되지 않은 파일이 배포됨

### 2차 원인: HTML 변환 누락 (근본 원인)

정상적으로 빌드가 되었다면:
- Vite는 `index.html`의 `<script type="module" src="/src/main.tsx"></script>`를 찾아서
- 빌드 과정에서 `/assets/main-[hash].js`로 변환해야 함
- 하지만 빌드가 실행되지 않아서 변환되지 않은 원본 HTML이 배포됨

## 트러블슈팅 과정

### 1단계: 증상 확인

브라우저 개발자 도구를 통해 확인:
- **Network 탭**: `main.tsx` 파일이 직접 요청되고 있음
- **Console 탭**: MIME 타입 오류 메시지
- **페이지 소스**: HTML에 여전히 `/src/main.tsx` 참조가 남아있음

**분석**: 빌드된 HTML이 변환되지 않았다는 것을 확인

### 2단계: 빌드 설정 검토

Vite 설정 파일(`vite.config.ts`) 확인:
- `entryFileNames` 설정이 함수 형태로 되어 있어 문제 가능성 확인
- 하지만 이것이 주요 원인은 아님 (나중에 확인)

**조치**: 
- `entryFileNames`를 간단한 문자열 패턴으로 변경
- HTML 변환 검증 플러그인 추가

### 3단계: 빌드 검증 강화

GitHub Actions 워크플로우에 검증 단계 추가:
- 빌드된 HTML에 `/src/` 참조가 있는지 확인
- JavaScript 파일이 `dist/assets/`에 생성되었는지 확인

**결과**: 검증 단계가 추가되었지만, 빌드가 실패해서 실행되지 않음

### 4단계: 근본 원인 발견

GitHub Actions 로그 확인:
- 빌드 단계에서 "Dependencies lock file is not found" 오류 확인
- 빌드가 실패해서 HTML 변환이 전혀 일어나지 않았음을 확인

**핵심 발견**: 문제는 Vite 설정이 아니라 빌드 자체가 실행되지 않았던 것!

### 5단계: 해결

1. **`package-lock.json` 생성**
   ```bash
   npm install
   ```

2. **워크플로우 확인**
   - `npm ci` 명령어가 lock 파일을 사용하도록 확인
   - lock 파일이 생성되면 정상 작동

3. **변경사항 커밋 및 푸시**
   - `package-lock.json` 추가
   - 설정 개선사항 포함

## 해결 방법 요약

### 즉시 해결
1. `package-lock.json` 파일 생성 및 커밋
2. GitHub Actions 빌드 재실행

### 장기적 개선
1. **Vite 설정 최적화**
   - `entryFileNames`를 문자열 패턴으로 단순화
   - HTML 변환 검증 플러그인 추가

2. **빌드 검증 강화**
   - GitHub Actions에 HTML 변환 검증 단계 추가
   - 빌드 실패 시 명확한 오류 메시지 제공

3. **`.nojekyll` 파일 관리**
   - GitHub Pages의 Jekyll 처리를 비활성화
   - 빌드 후 자동 생성되도록 설정

## 트러블슈팅 팁

### 1. 증상부터 확인하기
- 브라우저 개발자 도구로 실제 로드되는 파일 확인
- Network 탭에서 어떤 파일이 요청되는지 확인
- Console에서 정확한 오류 메시지 확인

### 2. 빌드 로그 확인하기
- GitHub Actions 로그를 자세히 확인
- 각 단계가 성공했는지 확인
- 오류 메시지를 처음부터 끝까지 읽기

### 3. 예상과 다른 결과를 받아들이기
- 처음에는 Vite 설정 문제라고 생각했지만
- 실제로는 빌드가 실행되지 않은 것이었음
- 증거를 따라가기

### 4. 단계별 접근
1. 증상 확인
2. 가설 수립
3. 검증
4. 해결 시도
5. 확인 및 반복

## 예방 방법

### 1. Lock 파일 관리
- `package-lock.json`을 항상 버전 관리에 포함
- `.gitignore`에 포함시키지 않기
- 의존성 변경 시 lock 파일도 함께 업데이트

### 2. CI/CD 검증 강화
- 빌드 전 검증 단계 추가
- 빌드 후 결과물 검증
- 명확한 오류 메시지 제공

### 3. 로컬 빌드 테스트
- 배포 전 로컬에서 빌드 테스트
- `npm run build`로 생성된 파일 확인
- `dist/index.html`이 올바르게 변환되었는지 확인

## 참고 파일

- `vite.config.ts`: Vite 빌드 설정
- `.github/workflows/deploy.yml`: GitHub Actions 워크플로우
- `package-lock.json`: 의존성 lock 파일 (생성 필요)
- `.nojekyll`: Jekyll 처리 비활성화 파일

## 관련 오류 메시지

1. **MIME 타입 오류**
   ```
   Failed to load module script: Expected a JavaScript-or-Wasm module script 
   but the server responded with a MIME type of "application/octet-stream"
   ```

2. **빌드 실패 오류**
   ```
   Dependencies lock file is not found in /home/runner/work/...
   Supported file patterns: package-lock.json, npm-shrinkwrap.json, yarn.lock
   ```

3. **HTML 변환 실패 (검증 시)**
   ```
   ERROR: HTML still contains /src/ references!
   This means Vite did not transform the HTML properly.
   ```

## 결론

이 문제는 여러 원인이 겹쳐서 발생했습니다:
1. **직접적 원인**: `package-lock.json` 파일 부재로 인한 빌드 실패
2. **근본 원인**: 빌드 실패로 인한 HTML 변환 누락
3. **결과**: 변환되지 않은 HTML이 배포되어 `.tsx` 파일을 직접 로드 시도

해결 후 배운 점:
- CI/CD 파이프라인의 각 단계가 중요함
- 증상만 봐서는 원인을 놓칠 수 있음
- 로그를 자세히 확인하는 것이 중요함
- Lock 파일 관리의 중요성

