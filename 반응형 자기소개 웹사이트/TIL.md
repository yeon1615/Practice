💡 비율이 바뀌어야 하는 이미지는 `img` 태그로 바로 넣지 않고 `div` 요소의 백그라운드로 넣는다

<br>

### padding의 %값

- 높이를 만들 수 있는 다른 속성 → `padding-top` 혹은 `padding-bottom`

  - `height` 300px과 `padding-top` 300px은 동일
  - `padding-top: 100%;`

    - padding의 **퍼센티지(%) 기준**은 **해당 요소의 부모의 너비 기준**
    - 사람들이 많이 쓰는 **16:9 비율**로 만들고 싶다면 9/16 인 0.5625, 즉 **56.25%**

    <br>

### position 속성

- `position: relative;` 속성을 주면 `z-index` 값을 주지 않더라도 `position: static;` 인 요소보다 앞으로 튀어나온다.
- `position: absolute;` 로 지정된 요소는 기본적으로 뷰포트, 창 기준점으로 배치가 된다. → 기준으로 삼을 요소에 `position: relative;` 속성 부여

  - `top, bottom, left, right` 속성에 다 `0` 을 부여하면 부모 크기만큼 꽉차게 된다

   <br>

### 가상 요소(pseudo-element) `::after`

- `::after`
  - 선택한 요소의 맨 마지막 자식으로 가상 요소(pseudo element)를 하나 생성한다
  - 보통 `content` 속성을 통해 컨텐츠를 추가한다
- `content` 속성
  - HTML문서에 정보로 포함되지 않은 요소를 CSS에서 새롭게 생성시켜준다.
  - `content: "";`
  - content: attr(); 속성값도 넣을 수 있음
- 대표적 가상요소들 `::after` , `::before` , `::placeholder`

 <br>

### Negative margin

- `margin` 은 시작점이나 끝나는지점을 속이는 속성이다!
- 마크업 상에서 뒤에 있어도 `negative margin` 값으로 시작점이 앞당겨지면 앞으로 튀어나오게 됨
- `margin` 의 양수값이 시작점/끝나는 지점을 늦춘다면, **음수값** 즉 `**negative margin**` 은 **시작점/끝나는 지점을 앞당긴다**
- negative margin으로 끝나는 지점을 앞당기게 되면, 뒤에 오는 요소의 시작점 역시 앞당겨진다! 형제요소에 영향을 준다.
- `margin-left` , `margin-top` 음수값 → 더 빨리 시작하도록
- `margin-right` , `margin-bottom` 음수값 → 더 빨리 끝나도록
- 블록요소에 width값을 고정하지 않은 상태에서 `margin-left` 에 음수값을 주게 되면, 끝나는 지점은 그대로 두고 시작점만 당겨진다 → 왼쪽으로 **늘어난다**(이동❌) **부모 크기만큼 한줄을 모두 차지하기 때문!**
- → 좌우 마진에 네거티브 값을 주면 크기가 커진다!

 <br>

### 이미지 스프라이트 기법

- 아이콘 등의 이미지들을 한 장의 시트로 묶어서, 한장의 이미지로 여러 요소의 배경화면을 소화하는 것
- 이미지 로딩으로 인한 속도저하를 막기 위함
- 한장의 시트로 `background-position` 속성의 값을 각각 다르게 적용해 맞추는 것

 <br>

### em, rem 단위

- `em`
  - 해당 요소에 지정된 font-size를 기준으로 하는 단위. 해당 요소의 font-size가 지정되지 않았을 경우 부모 요소의 font-size를 기준으로 설정
  - 요소의 폰트 크기에 상응하는 유동적인 레이아웃을 만들 수 있음
  - 상대적인 기준을 가지므로 코드가 복잡해질 경우 계산값을 예측하기 어려워짐
    ```html
    <html>
      16px
      <body>
        0.5em -> 8px
        <div>
          0.5em -> 4px
          <p>
            0.7em -> ?
            <a>
              0.3em -> ? // 픽셀값이 소수점으로 떨어지므로 브라우저에서
              정상적으로 지원되지 않을 수 있음</a
            >
          </p>
        </div>
      </body>
    </html>
    ```
- `rem`
  - html(root요소)의 font-size를 기준으로 함
  - 부모요소의 영향을 받지 않으므로 실수할 가능성이 적어지고, 계산도 쉬우므로 직관적
  - `rem` 을 사용해 폰트 크기를 지정하는 것이 바람직
