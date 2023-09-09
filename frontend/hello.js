// WebSocket 연결 열기
const socket = new WebSocket('ws://localhost:8080');

// 연결이 열릴 때의 이벤트 핸들러
socket.onopen = (event) => {
    console.log('WebSocket 연결이 열렸습니다:', event);

    // 메시지 보내기
    socket.send(JSON.stringify({ message: '안녕하세요, WebSocket!' }));
};

// 메시지 수신 시의 이벤트 핸들러
socket.onmessage = (event) => {
    console.log('받은 메시지:', event.data);
};

// 연결이 닫힐 때의 이벤트 핸들러
socket.onclose = (event) => {
    if (event.wasClean) {
        console.log('WebSocket 연결이 깔끔하게 닫혔습니다:', event);
    } else {
        console.error('WebSocket 연결이 갑작스럽게 닫혔습니다:', event);
    }
};

// 오류 발생 시의 이벤트 핸들러
socket.onerror = (error) => {
    console.error('WebSocket 오류:', error);
};
