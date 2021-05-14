아직 수정이 필요한 파일입니다.
## 1. Values.js

cssCode에서 사용할 상수값들입니다. 

```js
const SPACING = {
	4: 4,
	8: 8,
	10: 10,
	....	
}

const PAD = {
	xs: SPACING[24],
	sm: SPACING[40],
	md: SPACING[60]
}

/// ROUND, BREAKPOINT, .... 
```

필요에 따라 상수값들을 여러 파일로 나누어 관리할 수 있지만 코드가 길지 않아 values.js 한 파일에 작성했습니다.
컬러는 예외적으로 colors 폴더에 작성했습니다.
<br>  
<br>  
  
## 2. cssCodes 폴더

`values.js`에서 정의한 상수값들을 이용해 작성한 css 코드 조각들(cssCodes)입니다.  

cssCodes는 emotion 또는 styled-component와 같은 css-in-js 라이브러리에서 사용됩니다.  

composite pattern을 적용한 방법으로, 여러 컴포넌트에서 공통적으로 사용되는 스타일을 cssCodes에 저장하고 이를 css-in-js에서 결합해 하나의 스타일링을 완성할 수 있습니다.

아래와 같이 사용됩니다.

```jsx
import s from 'csd'

const ExampleButton = styled.div`
	${s.colors.amber[100]}
	${s.baseButton}
	border-radius: ${s.round.sm}
`

const Nav = styled.nav`
  ${s.rowCenter}
  background-color: ${s.colors.amber[200]}
  color: ${s.colors.blue[300]}
`
```

아래 그림과 같이 자동완성을 통해 cssCode를 참조할 수 있습니다.  
![](detail/02-34-06.png)  
stylesheet.js 또한 임의로 분류했습니다. 몇몇 스타일은 분류가 애매해 사용해보며 수정할 필요가 있습니다.

## 2.1 alignChild.js

자식 요소들을 정렬하는 것과 관련된 cssCode입니다.

브라우저 호환성과 편의를 고려해 flex를 사용하였고 bootstrap을 참고해 작성했습니다.

**flex**

기본 flex로 `row` 와 `col` 에서 사용됩니다. 

`flex-wrap:wrap` 을 적용했습니다. 

```jsx
const flex = `
    display:flex;
    flex-wrap:wrap;
`;

// 필요 시, overwrite 또는 extend할 수 있습니다.
const Container = styled.div`
	${s.flex}
	flex-wrap:nowrap;
	justify-content: center;
`
```

**row / rowCenter / rowSpaceBetween / rowEnd**

가로 정렬과 관련된 flex css 조각입니다. 

`align-items` 수정이 필요할 경우 이를 overwrite해야합니다.

```jsx
export const row = `
    ${flex}
    align-items:center;
`;
export const rowCenter = `
    ${row}
    justify-content:center;
`;

export const rowSpaceBetween = `
    ${row}
    justify-content:space-between;
`;

export const rowEnd = `
    ${row}
    justify-content: flex-end;
`;

// usage
const Container = styled.div`
	${s.rowCenter}
`

// overwrite
const Container = styled.div`
	${s.rowCenter}
	align-items:start;
`
```

**col / colCenter / colSpaceBetween / colEnd**

세로 정렬입니다.

```jsx
export const col = `
    ${flex}
    flex-direction:column;
    flex-wrap:nowrap;
`;
export const colCenter = `
    ${col}
    justify-content:center;
    align-items:center;
`;
export const colSpaceBetween = `
    ${col}
    justify-content:center;
    align-items:space-between;
`;

export const colEnd = `
    ${col}
    justify-content: flex-end;
`;
```

**relative**

```jsx
const relative = `
    position:relative;
`;
```

## 2.2 alignSelf.js

요소를 self align하는 것과 관련된 코드 조각입니다.

**fluid**

```jsx
const fluid = `width: 100%;`;
```

**grid / grid1~12**

grid는 flex합니다.

grid1~ 12는 고정된 너비를 차지합니다.

fluid vs grid12 비교 : [https://codepen.io/changhyun2/pen/LYxOgXr?editors=1111](https://codepen.io/changhyun2/pen/LYxOgXr?editors=1111)

```jsx
const grid = `flex: 1 0 auto;`;

export const fixedGrid = `flex: 0 0 auto;`;

export const grid1 = `
  ${fixedGrid}
  width: 8.3333333333%;
`;

export const grid2 = `
  flex: 0 0 auto;
  width: 16.6666666667%;
`;

//  grid3 ~ grid11

export const grid12 = `
  flex: 0 0 auto;
  width: 100%;
`;
```

**absolute**

```jsx
export const absolute = `
  position:absolute;
  top:0;
`;
```

**mb1 ~**

모든 요소 간의 수직 거리는 mb으로 결정합니다.

```jsx
import spacing from './spacing.js'

export const mb1 = `margin-bottom: ${spacing[10]};`;
export const mb2 = `margin-bottom: ${spacing[20]};`;
export const mb3 = `margin-bottom: ${spacing[30]};`;

// mb4 ~ 
```

2.3 baseComponent.js

미완성된 파일입니다.

새로운 컴포넌트를 제작할 떄, 브라우저의 스타일 관련 default 속성들을 새롭게 정의해줘야하는데요. 이를 손쉽게 해결하기 위해 만든 baseComponent입니다.

예를 들어 ㄱ 사의 에서 A 서비스와 B 서비스를 출시한다고 가정했을 떄

다음과 같이 각 서비스에 대한 기본 컴포넌트를 baseComponent와 함께 정의할 수 있습니다.

```jsx
// const baseButton = `
// 	display: inline-block;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   outline: none;
//   cursor: pointer;
//   background: none;
//   font-size: inherit;	
// `	

const BaseButtonA = styled.button`
	${s.baseButton}
	// ...
`

const BaseButtonB = styled.button`
	${s.baseButton}
	// ... 
`
```

## 2.3 mediaQuery.js

미디어 쿼리와 관련된 css 코드입니다. values.js에서 정의한 `BREAKPOINT` 변수를 이용해 media query 문법을 생성하는 함수, 또는 함수들을 포함하는 객체를 export합니다.

아래와 같이 미디어쿼리 함수에 적용할 스타일을 template literal로 전달합니다. 

```jsx
// md 이상 width : 100%
// lg 이상 background-color : black
const container = styled.div`
	width: 50%;
	
	${s.under.md(`
		width: 100%;    // ${s.fluid}와 동일
	`)}
	
	${s.over.lg(`
		background-color: ${s.pallete.black};
	`)}
`

// sm ~ md 사이즈까지 grid3
const container2 = styled.div`
	${s.smTo.md(`
		${s.grid3}
	`)}
`
```

... 

추후 작성 및 수정