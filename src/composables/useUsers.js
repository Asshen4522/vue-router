import { computed, reactive } from "vue";



    

function addUser(userName) {
    let users = usersLocalStorage.value
    if (users.length===0) {
        users.push({
            id: 0,
            name: userName,
        })
    }else{
        const newUserId = users[users.length-1].id+1
        users.push({
            id: newUserId,
            name: userName,
        })
    }
    usersLocalStorage.value = users
}

function deleteUser(userId) {
    let users = usersLocalStorage.value
    const deletedUser = findUser(userId)
    const deletedUserId = users.indexOf(deletedUser)
    users.splice(deletedUserId,1)
    usersLocalStorage.value = users
}

function findUser(userId) {
    let users = usersLocalStorage.value
    return users.find((user)=>user.id === userId)
}



function changeUser(userId,newName) {
    let users = usersLocalStorage.value
    const changedUser = findUser(userId)
    const changedUserId = users.indexOf(changedUser)
    users[changedUserId].name = newName
    usersLocalStorage.value = users
}



const usersLocalStorage = computed({ 
    get() { 
        try { 
            if (localStorage.getItem('users')===null) { 
                return []
            } else {
                return JSON.parse(localStorage.getItem('users'))
            }
        } catch (error) {
            return []
        }
    },
    set(newValue) {
      localStorage.setItem('users', JSON.stringify(newValue))
    }
  })

export default function useUsers() {
    return {usersLocalStorage,addUser,deleteUser,findUser,changeUser}
}






































// const state = reactive({
//     users:[
//         {id:0,name:'Вика'},
//         {id:1,name:'Катя'},
//         {id:2,name:'Оляна'},
//         {id:3,name:'Вова'},
//         {id:4,name:'Начын'},
//         {id:5,name:'Рамазан'}
//     ]
// })


// const users = computed(()=> usersLocalStorage.value)

// function addUser(user) {
//     usersLocalStorage.value.push({
//         id: usersLocalStorage.value[usersLocalStorage.value.length-1].id+1,
//         name:user,
//     })
// }

// function deleteUser(index) {
//     const deletedUser = usersLocalStorage.value.find((user) => user.id === index)
//     const deletedUserIndex = usersLocalStorage.value.indexOf(deletedUser)
//     usersLocalStorage.value.splice(deletedUserIndex,1)
// }



// export default function useUsers() {
//     return {state,users,addUser,deleteUser}
// }