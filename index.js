
/**
document.querySelector("button").addEventListener("click", gotClick);
MDN에 순서랑 자세한거 다 써있으니 새로운 메소드 쓸 땐 귀찮아도 무조건 확인할 것!
뜻: 첫 번째(all이 아니라서 그런듯) 버튼이라는걸 다큐먼트에서 찾고 이벤트리스너라는걸 그 버튼에 추가한다. 
'클릭'이라는 말을 들으면 갓클릭이라는 함수를 실행한다.
여기서 함수 쓸 때 보통 함수 실행 때와 달리 ()를 뒤에 안 쓴다.
함수()를 쓴다는건 그 즉시 즉시 즉시 아주 바로 실행되니까 못 쓰는거임. 우리는 클릭이라는 일이 일어날 때만 부를거라
그래서 함수()가 아니라 함수만 쓰는거임!!!!!!!!!!!!!!!! 

function gotClick(){

    alert("hey!");

}

**/

//이걸 이렇게 간단하게 쓸 수도 있음
//document.querySelector("button").addEventListener("click", function(){alert("hey!");});

alert("hey!");


const numberOfDrumButton = document.querySelectorAll(".drum").length;

    for (let i = 0; i < numberOfDrumButton; i++) {

        document.querySelectorAll(".durm")[i].addEventListener("click", function () {

            const audio = new Audio("sounds/crash.mp3");
            audio.play();


    });

    }

    //*************const = i라고 쓰면 안되고 let은 됨 왜????????????
