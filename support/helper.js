export function formVerify(newData) {


  
  cy.get('.table').within(() => {
    cy.get("tbody tr")
      .find("td:last-child")
      .then((headerCells) => {
        headerCells.each((index, cell) => {
          expect(cell.innerText).to.deep.equal(newData[index]);
        });
      });
  });
}


const date = new Date();
const day = date.getDate();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();

export const formattedDate = `${day} ${month},${year}`;

console.log(formattedDate); // Output: "20 August, 2023"
