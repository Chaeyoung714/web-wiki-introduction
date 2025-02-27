console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.querySelector(".comment-list");
  const commentRegisterButton = document.getElementById("comment-register");

  commentRegisterButton.addEventListener("click", function () {
    const commentText = commentInput.value.trim();

    if (commentText === "") {
      alert("댓글을 입력해주세요!");
      return;
    }

    // 새로운 댓글 요소 생성
    const newComment = document.createElement("li");
    newComment.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">
          ${commentText}
        </div>
      </div>
    `;

    // 댓글 목록에 추가
    commentList.appendChild(newComment);

    // 입력 필드 초기화
    commentInput.value = "";

    // 등록 완료 메시지
    alert("댓글이 등록되었습니다!");
  });
});

