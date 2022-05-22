let service = []
let cost = []
let totalAmt = []
const laundry = document.getElementById("btn-1")
const weedGarden = document.getElementById("btn-2")
const cleanHouse = document.getElementById("btn-3")
const plumbing = document.getElementById("btn-4")
const vaccumSeats = document.getElementById("btn-5")
const washCarpet = document.getElementById("btn-6")
const internetInstallation = document.getElementById("btn-7")

const taskList =document.getElementById("task-list")
const totalList = document.getElementById("total-list")
const invoiceBtn = document.getElementById("invoice-btn")
const TotalAmount = document.getElementById("total-amt")


let myServices = JSON.parse(localStorage.getItem("service"))
if(myServices){
    service = myServices
    renderTask(service)
}

let myCosts = JSON.parse(localStorage.getItem("cost"))
if(myCosts){
    cost = myCosts
    renderTotal(cost)
}

let myTotal = JSON.parse(localStorage.getItem("totalAmt"))
if(myTotal){
    totalAmt = myTotal
    renderTotalAmount()
}

function renderTask(services){
    let tasks = ""
    for(let i = 0; i < services.length; i++){
        tasks += `<li>${services[i]}</li>`
    }
    taskList.innerHTML = tasks
}
function renderTotal(costs){
    let total = ""
    for(let i = 0; i < costs.length; i++){
        total += `<li>Ksh ${costs[i]}</li>`
    }
    totalList.innerHTML = total
}

function renderTotalAmount(){
    let result =
    cost.reduce(function(previous, current){
        return previous + current
    }, 0)
    totalAmt.push(result)

    TotalAmount.textContent = `Ksh ${result}`

}



laundry.addEventListener("click", function(){
    service.push("Laundry")
    localStorage.setItem("service", JSON.stringify(service))
    cost.push(1000)
    localStorage.setItem("cost", JSON.stringify(cost))
    renderTask(service)
    renderTotal(cost)
    renderTotalAmount()

}, {once : true})

weedGarden.addEventListener("click", function(){
    service.push("Weed Garden")
    localStorage.setItem("service", JSON.stringify(service))
    cost.push(500)
    localStorage.setItem("cost", JSON.stringify(cost))
    renderTask(service)
    renderTotal(cost)
    renderTotalAmount()
}, {once : true})

cleanHouse.addEventListener("click", function(){
    service.push("Clean House")
    localStorage.setItem("service", JSON.stringify(service))
    cost.push(3500)
    localStorage.setItem("cost", JSON.stringify(cost))
    renderTask(service)
    renderTotal(cost)
    renderTotalAmount()
}, {once : true})

plumbing.addEventListener("click", function(){
    service.push("Plumbing")
    localStorage.setItem("service", JSON.stringify(service))
    cost.push(500)
    localStorage.setItem("cost", JSON.stringify(cost))
    renderTask(service)
    renderTotal(cost)
    renderTotalAmount()

}, {once : true})

vaccumSeats.addEventListener("click", function(){
    service.push("Vaccum Seats")
    localStorage.setItem("service", JSON.stringify(service))
    cost.push(4000)
    localStorage.setItem("cost", JSON.stringify(cost))
    renderTask(service)
    renderTotal(cost)
    renderTotalAmount()

}, {once : true})

washCarpet.addEventListener("click", function(){
    service.push("Wash Carpet")
    localStorage.setItem("service", JSON.stringify(service))
    cost.push(1500)
    localStorage.setItem("cost", JSON.stringify(cost))
    renderTask(service)
    renderTotal(cost)
    renderTotalAmount()

}, {once : true})

internetInstallation.addEventListener("click", function(){
    service.push("Internet Installation")
    localStorage.setItem("service", JSON.stringify(service))
    cost.push(4500)
    localStorage.setItem("cost", JSON.stringify(cost))
    renderTask(service)
    renderTotal(cost)
    renderTotalAmount()

}, {once : true})

invoiceBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    service = []
    cost = []
    totalAmt = []
    renderTask(service)
    renderTotal(cost)
    renderTotalAmount()
})