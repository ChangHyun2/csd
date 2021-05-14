자세한 csd 사용법은 [detail](./detail.md)을 참고해주세요.

## 1. csd ?

**css codes for design systems**

emotion 또는 styled-components와 같은 css in js 라이브러리를 활용해 css를 작성할 때
반복되는 코드를 줄여주고 디자인 시스템을 빠르게 적용할 수 있도록 돕는 cssCodes 라이브러리입니다.
<br/>
<em>bootstrap를 참고하였으며 [프로젝트](https://github.com/ChangHyun2/airbnb-client)를 진행하며 적용해본 스타일링 방법입니다.</em>
<br/>

## 2. csd 라이브러리에서 제공하는 디자인 시스템을 그대로 사용할 경우

csd는 material ui의 컬러 시스템과 airbnb 사이트 클론 프로젝트를 진행하며 구축했던 디자인 시스템을 포함하고 있습니다. 
별도의 디자인 시스템을 구축하지 않는 경우라면 **1) csd package 설치** 후 사용해주시면 됩니다. 
만약 새로운 디자인 시스템을 구축하는 경우라면 **3. 커스텀한 디자인 시스템을 적용할 경우**를 참고해주시기 바랍니다.

**1) csd package 설치**
```
npm i csd
```

**2) csd package 사용**
```
// Nav.js

import s from 'csd'

const StyledNav = styled.div`
  ${s.alignChild.rowCenter}
  background-color: ${s.colors.amber[100]}
  color: ${s.colors.purple[100]}
`

const Nav = () => <StyledNav>
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
</StyledNav>
```

## 3. 커스텀한 디자인 시스템을 적용할 경우

csd 라이브러리에는 airbnb 사이트를 클론하며 간추린 디자인 시스템과 material ui의 칼라시스템을 포함하고 있습니다.
새로운 디자인 시스템을 적용할 경우 이와 관련된 파일을 수정한 후 `npm run build`한 `index.js`와 `index.d.ts` 파일을 프로젝트로 옮겨주신 후 `webpack alias`를 적용해 `import s from 'S'`문으로 새롭게 구성된 cssCodes를 사용해주시면 됩니다.


**1) 레포 클론**

```
git clone https://github.com/ChangHyun2/csd
```

**2) 디자인 시스템 관련 파일 수정**

관련 파일/폴더는 아래와 같습니다.
```
- colors
- cssCodes
  - pad.js
  - round.js
  - spacing.js
  - typo.js
  - zIndex.js
- values.js
- ts files
```

자동완성을 위해 ts 파일을 작성해주시면 좋습니다.

**3) 파일 번들링**

```
npm run build
```

웹팩 build시, `lib` 폴더로 `index.js` 파일이 생성됩니다. 
생성된 파일을 프로젝트 폴더로 옮기고 webpack alias를 통해 `import s from 'S'`의 짧은 구문으로 cssCodes를 import해주시면 됩니다.

**4) 프로젝트에서 사용하기**

```
// Nav.js

const StyledNav = styled.div`
  ${s.alignChild.rowCenter}
  background-color: ${s.colors.myDesignSystemColor}
  color: ${s.colors.myDesignSystemColor2}
`

const Nav = () => <StyledNav>
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
</StyledNav>
```

## 보완할 부분

아직 완성도가 높지 않은 라이브러리입니다.
contribute 또는 다음 버전을 위한 피드백을 해주신다면 감사하겠습니다!
사용 관련 문의는 jchangh2@gmail.com로 부탁드립니다.

- baseComponent
- pallete
- ts 파일
- README csd API
- 스토리북 추가
- ...