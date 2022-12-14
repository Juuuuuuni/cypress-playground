
describe('회원가입', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });

  it('회원가입 화면이 정상적으로 렌더링 된다.', () => {
    cy.visit('http://localhost:5173');

    cy.getForm().toMatchImageSnapshot();
  });
  
  it('Username input을 클릭 하면 테두리가 진해진다.', () => {
    cy
      .getUsernameInput()
      .focus()
      .should('have.', ":focus")
      
  })
  
});
