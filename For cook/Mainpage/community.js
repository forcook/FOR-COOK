// 검색 버튼 클릭 시 필터링 기능 예시
document.querySelector('button').addEventListener('click', () => {
    const searchQuery = document.querySelector('input').value.toLowerCase();
    const rows = document.querySelectorAll('.faq-table tbody tr');

    rows.forEach(row => {
        const question = row.cells[1].textContent.toLowerCase();
        row.style.display = question.includes(searchQuery) ? '' : 'none';
    });
});

// 페이지네이션 기능 추가
const paginationButtons = document.querySelectorAll('.pagination button');
paginationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // 페이지네이션 관련 로직 구현
        alert(`페이지 ${e.target.textContent}로 이동합니다.`);
    });
});
