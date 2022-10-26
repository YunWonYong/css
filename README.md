# 빔캠프
## 첫 주 첫 번째 과제 
![결과물](https://user-images.githubusercontent.com/59129553/195994726-8cb1fec8-3b14-4961-8eab-aa595077118f.png)
### 2022-10-10 feedback
#### #1
1. comment node DOM 개념이니 별도로 알아보기   
2. unset과 revert 정리하기    
3. css selector combinator 알아보기    
    > combinator 확인하기
4. width: auto; 좀 더 명확하게 답할 수 있게 정리하기
5. initial value 문장 정리하기 (__38 ~ 42 line__)   
    > /study/1day/test_1/index.html 
6. containing block 정리하기
7. 부모 요소의 height: auto;와 자식 요소의 height: 100%;일 때 정리하기

#### #2
1. class 명에 img와 같은 불명확한 단어를 넣지 말고 좀 더 명확하게 특정할 수 있도록 작명
2. class 명에 복수와 단수 (contents와 content)를 구분하는 것은 헷갈릴 수 있으므로 지양
3. 공통적인 부분들은 독립적인 CSS로 분리할 수 있는지 고민하기
4. 디자인 용도에 맞는 markup 고민하기
5. layout을 담당하는 class 들은 시각적 요소를 갖지 않도록 주의
6. height property를 고정값으로 설정하는 것을 지양 이유는 내용이 변경돼도 망가지지 않도록
7. 적정 기술인지 고민하기 (남용하지 않기)
8. letter-spacing property를 사용할 땐 text-indent property도 같이 사용하기 (이유 찾아봐야 함)
9. cursor property의 값을 pointer로 변경 시 해당 요소가 클릭 이벤트가 있는지 고려해야 함.

## 첫 주 두 번째 과제
![결과물](https://user-images.githubusercontent.com/59129553/195995187-33cb85be-abe2-47c2-ab53-acc99b4f8833.png)
### 2022-10-13
#### #1
1. class 명을 작명할 때 일관성 있게 해야 한다.
2. class 명의 구분자(separator)를 기준으로 규칙 정하기. 부모 자식 관계인지 부품의 부속인지 구분자를 별도로 정해야 함.
3. markup 할 때 전달하고자 하는 내용(contents)만 하고 그 외적인 이미지와 같은 건 CSS로
4. p Tag는 문단(하나의 주제를 담고 있는 것)을 의미하는 요소이기 때문에 문단과 문단 사이를 구분해줘야 함
5. 최대한 원본 이미지가 훼손되지 않도록 주의하여 CSS로 크기 설정하기

## 이 주 첫 번째 과제
![결과물](https://user-images.githubusercontent.com/59129553/196440025-ca1a276f-d410-44b0-a39c-fdcfcbc03118.png)
### 2022-10-17 feedback
#### #1
1. 마크업과 스타일이 유효한 코드인지 확인하기 
2. position property의 absolute는 마지막 선택지로 생각하기
3. 자식 요소에 의해 부모 요소의 레이아웃에 영향을 주면 안 된다.
4. class 명이 최대한 안 겹치도록 주제에 맞는 prefix를 사용해 실수 줄이기

## 이 주 두 번쨰 과제
### 2022-10-20 feedback
![결과물](https://user-images.githubusercontent.com/59129553/198076760-0e8fc8a5-6758-4b50-b404-da8b8af2d46f.png)
#### #1
1. css property 중 적용되지 않는 것은 제거하기
2. color property는 currentColor라는 값을 사용해서 부모에서 설정한 값을 참조할 수 있다.    
   (border-color property의 initial value는 currentColor 다.)
3. button element의 initial value 확인 하기
4. 복잡한 selector일 경우 부모 element에 css property를 추가해서 해결할 수 있는지 생각하기
5. 마크업 단순화 생각하기
