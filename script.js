document.querySelectorAll('.show-details-button').forEach(button => {
  button.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      const modalContent = modal.querySelector('.modal-content');
      modal.style.display = 'block';
      modalContent.style.right = '0'; // ページの右側にスライドイン
  });

  const closeModalButtons = document.querySelectorAll('.close-button');
  closeModalButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => {
          const modal = closeButton.parentElement.parentElement;
          const modalContent = closeButton.parentElement;
          modalContent.style.right = '-100%'; // ページの右外にスライドアウト
          setTimeout(() => {
              modal.style.display = 'none';
          }, 300); // スライドアウトのアニメーション時間（ミリ秒）
      });
  });
});

