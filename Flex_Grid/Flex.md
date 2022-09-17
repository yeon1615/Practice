# Flexbox


- flex-item의 **width는 자신이 가진 내용물의 width만큼**만 차지(inline요소들처럼!) **height는 컨테이너의 높이만큼 늘어난다** → column 레이아웃을 만들 때 아주 편리!
- float 된 요소들은 **자신이 가진 컨텐츠만큼만 height**로 갖는 것과 비교됨

<br>
<br>

---

## Flex 컨테이너에 적용하는 속성들

<br><br>

### flex-wrap

<br>

- 컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때 아이템 줄바꿈을 어떻게 할지 결정하는 속성
    - no-wrap 상태에서 아이템들의 총 너비보다 컨테이너의 너비가 더 작으면 아이템은 걍 컨테이너에서 삐져나옴
    - float는 컨테이너 너비가 줄어들면 아래로 떨어지는 것과 비교됨

<br>

### flexbox를 이용한 반응형(모바일-pc)

<br>

```css
/*모바일 기준 세로로 배치*/
.flex-container {
	display: flex;
	flex-direction: column;
}
/*600px를 넘어가면 가로로 배치됨*/
@media (min-width: 600px) {
	.flex-container {
	flex-direction: row;
	}
	.flex-item {
	flex: 1; //신축성?
	}
}
```

<br>

### justify-content

- 주의⚡ `space-evenly` 는 ms계열 브라우저(엣지, IE)에서는 지원❌

<br>

### align-items

- flex-item의 width는 자신이 가진 내용물의 width만큼만 차지(inline요소들처럼!), **height는 컨테이너의 높이만큼 늘어난다**

✅ 여기서 height가 컨테이너 높이만큼 늘어나는 이유가 바로❗

- `align-items` 의 기본값이 `stretch` 이기 때문!!

✅ 참고

- `align-content` 의 기본값도 `stretch` 이다 (flex-wrap: wrap; 인 상태에서 두 줄 이상이 되었을 때부터)


💡 `align-items` , `align-content` 연습할 때 컨테이너의 높이를 따로 늘려주는 것 잊지말기.. 안그럼 걍 stretch상태로 딱 붙어서 꽉차있음..

<br>

### 사용예 : 버튼

<br>

- 버튼 안에 있는 아이콘을 중앙정렬 해야 하는 경우 상하좌우 `padding`을 써도 되겠지만, 아이콘의 크기가 균일하지 않을 경우(png가 아닌 폰트어썸 svg 등) 애매해짐..
- 이 때 `justify-content: center;` + `align-items: center;` 를 사용한다!
- 버튼 옆에 텍스트가 나올 것을 고려해서 컨테이너를 `display: inline-flex;` 해서 너비,높이 설정하는 경우가 많음

<br>

---

<br>

## Flex 아이템에 적용하는 속성들

<br><br>

### flex-basis 유연한 박스의 기본 영역

<br>

- flex-item의 **기본 크기**(기본 점유 영역)를 설정한다
    - `flex-direction` 이 `row` 일 때는 `너비`
    - `flex-direction` 이 `column` 일 때는 `높이`
- 기본값은 `auto`
    - 해당 아이템의 `width` 값을 가짐
    - `width` 를 따로 설정하지 않았다면 **컨텐츠의 크기**
    - **flex-item이 기본적으로 자신이 가진 내용물 만큼의 너비를 갖는 이유**❗

```css
.item {
	flex-basis: auto;
	flex-basis: 0;
	flex-basis: 50%;
	flex-basis: 300px;
 
	flex-basis: 10rem;
	flex-basis: content;
}
```

✅ `flex-basis: content;` 

- 컨텐츠의 크기, 즉 `width` 를 따로 설정하지 않은 경우와 같음

<br><br>

### flex-basis와 width의 차이 💡

<br>

```css
/* flex-direction: row;의 경우*/
.item {
	flex-basis: 100px
}
```

- 원래의 width(내용물의 너비)가 100px이 안되는 아이템은 100px로 늘어나고, 원래의 width가 100px이 넘는 아이템은 해당 크기(100px보다 큰 값)를 유지함

```css
/* flex-direction: row;의 경우*/
.item {
	width: 100px;
}
```

- 원래의 width가 100px를 넘더라도(내용물의 너비가 100px보다 크더라도) 100px로 강제적으로 맞춰짐

`flex-basis` 와 `width` 를 둘 다 설정하게 되면 ❓

```css
/* flex-direction: row;의 경우*/
.item {
	flex-basis: 100px;
	width: 100px;
}
```

<br><br>

### flex-grow 유연하게 (여백) 늘리기

<br>

- 아이템이 ****`flex-basis` **의 값(기본 점유 영역)보다 커질 수 있는지**를 결정하는 속성
- 숫자값이 들어가며, `0` **보다 큰 값이 들어갈 경우** 해당 아이템은 flexible box로 변한다. 즉 **원래의 크기(flex-basis의 값)보다 늘어나는 속성**을 가지게 되어 빈 공간을 메우는 것
- **기본값은 0**
    - 따라서 **따로** `flex-grow` **속성값을 지정하지 않았을 경우 기본적으로 아이템이 늘어나지 않았던 것**❗

- `flex-grow` 숫자값의 의미
    - 아이템들의 **flex-basis** ( 설정하지 않았을 경우 auto, 즉 내부 컨텐츠 너비)**를 제외한 여백 부분을 해당 숫자의 비율로 나누어 가진다**
    - **내용물을 제외한 여백의 비율**❗
    - 늘어날 수 있는 한계는 부모 element의 width

💡 `flex-basis: 0;` 으로 설정할 경우 `flex-grow` 는 여백공간이 아닌 **전체공간을 분할**한다

<br>
<br>

### flex-shrink 유연하게 줄이기

<br>

- 아이템이 ****`flex-basis` **의 값(기본 점유 영역)보다 작아질 수 있는지**를 결정하는 속성
- 숫자값이 들어가며, `0` **보다 큰 값이 들어갈 경우** 해당 아이템은 flexible box로 변하고 **flex-basis보다 작아진다**
- **기본값은 1**
    - 따라서 따로 `flex-shrink` 를 설정하지 않을 경우 항상 `0` 보다 큰 값을 가지므로 아이템이 `flex-basis` 보다 줄어들 수 있는 것(플렉스 컨테이너의 크기를 넘지 않기 위해..)
- `flex-shrink: 0;` 💡
    - **컨테이너 크기가 줄어도 아이템의 크기는 줄어들지 않도록 하겠다!**
    - 아이템의 크기가 `flex-basis` 보다 작아지지 않으므로, **width 속성과 함께 가로폭을 고정**한 column을 만들 수 있음❗
    
    ```css
    .container {
    	display: flex;
    }
    
    .item:first-child {
    	flex-shrink: 0;
    	width: 150px;
    }
    .item:nth-child(2) {
    	flex-grow: 1;
    }
    
    // 컨테이너의 폭을 100%에서 200px로 줄여도 1번 item은 150px의 값을 유지한다. 
    
    ```
<br>  

### flex 단축속성

<br>

- `flex-grow` , `flex-shrink` , `flex-basis` 순서
- **값이 한 개일 때**
    - 숫자값이면 `flex-grow` 를 설정
        - `flex-shrink` 는 기본값인 1, `flex-basis` 는 0 (auto 아님)
    - 길이단위나 퍼센트값이면 `flex-basis` 를 설정

```css
.item {
	flex: 2; /* flex-grow: 2; */
	flex: 10%; /* flex-basis: 100px; */
}
```

- 값이 두 개일 때
    - 첫 번째 값은 무조건 `flex-grow` , 즉 숫자값이어야 함
    - 두 번째 값
        - 숫자값이면 `flex-shrink` 를 설정
        - 길이단위, 퍼센트값, auto일 경우 `flex-basis` 를 설정

```css
.item {
	flex: 2 2 /* flex-grow, flex-shrink 각각 2 */
	flex: 2 10px /* flex-grow: 2; flex-basis: 100px; */
}
```

<br>

🚨 주의

- `flex-basis` **을 생략**하면 기본값인 `auto` (내부 컨텐츠의 원래 크기)가 들어가는 게 아닌, **0으로 설정**된다.
- 즉 `flex-grow` 가 여백 영역이 아닌 **전체 영역을 분할**하게 된다.
- 따라서 `flex` 단축속성에 **하나의 숫자값만 지정할 경우 전체 영역을 해당 비율만큼 분할**❗

```css
.item:first-child {
	flex: 1; /* flex: 1 1 0; 과 동일 */
}
.item:last-child{
	flex: 3; /* flex: 3 1 0; 과 동일 */
}
```

<br>

💡 다단 column을 나누어야 할 경우에는 flex-grow 속성보단 width속성이 안전하다

- flex-item의 내부 컨텐츠에 `white-space: nowrap;` 등 줄어들지 않는 속성을 추가하게되면, 유연하게 늘어나려는 `flex-grow` 의 특성 상 flex-container의 너비가 과도하게 늘어날 위험이 있음
- 어떠한 경우에도 크기가 고정되어야 할 다단 column 레이아웃이 필요한 경우 `width` 속성을 사용해 강제적으로 고정하는 것이 안전함
- `flex-basis` 역시 기본값인 `auto` 를 쓰는 게 안전하다.. 우리의 예상에서 벗어나지 않도록 동작하게 하기 위해..