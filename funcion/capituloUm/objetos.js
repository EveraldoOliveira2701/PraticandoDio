//filtrando dados em um objeto
const user = {
    id:42,
    displayName: 'Rosimeire',
    fullName: {
        firstName:'Honório',
        lastName: 'da Silva'
    }
};
function userId({id}) {
    return id; 
       
}
function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}
userId(user)

getFullName(user)
