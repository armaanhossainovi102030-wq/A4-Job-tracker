let total = document.getElementById('total');
let interview = document.getElementById('interview')
let rejected = document.getElementById('rejected')

let interviewList = []
let rejectedList = []

const allCard = document.getElementById('all-card');
const main = document.querySelector('main')
const allFilterBtn= document.getElementById('allfilter')
const interviewFilterBtn= document.getElementById('interviewfilter')
const rejectedFilterBtn= document.getElementById('rejectedfilter')
const filteredSection =document.getElementById('filteredSection')

function calculateCount(){
    total.innerText=allCard.children.length
    interview.innerText=interviewList.length
    rejected.innerText=rejectedList.length

}
calculateCount()
function toggleStyle(id){
    
    allFilterBtn.classList.remove('bg-blue-700','text-amber-50')
    interviewFilterBtn.classList.remove('bg-blue-700','text-amber-50')
    rejectedFilterBtn.classList.remove('bg-blue-700','text-amber-50')
    
    allFilterBtn.classList.add('bg-white' ,'text-black')
    interviewFilterBtn.classList.add('bg-white' ,'text-black')
    rejectedFilterBtn.classList.add('bg-white','text-black')
    
    const selectedId =document.getElementById(id)

    selectedId.classList.remove('bg-white','text-black')
    selectedId.classList.add('bg-blue-700','text-amber-50')
   
    if(id == 'interviewfilter'){
        allCard.classList.add('hidden')
        filteredSection.classList.remove('hidden')
    }
    else if(id=='allfilter'){
        allCard.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    
    }
    
}

main.addEventListener('click', function(event){
    if(event.target.classList.contains('interviewBtn')){
        const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const position= parentNode.querySelector('.position').innerText
    const applyBtn = parentNode.querySelector('.apllyBtn').innerText
    const benifit = parentNode.querySelector('.benifit').innerText
     parentNode.querySelector('.apllyBtn').innerText= 'Applied'
    const companyInfo = {
        companyName,
        position,
        benifit,
        apllyBtn:'Applied'
    }
    const choosed= interviewList.find(item=>item.companyName == companyInfo.companyName)
   
    if(!choosed){
        interviewList.push(companyInfo)
    }
     renderInterview()
    }
  
})

function renderInterview(){
    filteredSection.innerHTML = ''
    for (let interview of interviewList){
       console.log(interview)
        let div = document.createElement('div')
        div.className = 'card bg-white p-4 rounded  flex justify-between mt-3'
        div.innerHTML = `
         <div>
                <p class="companyName font-bold">${interview.companyName}</p>
                <p class="position">React Native Daveloper</p>
                <p class="benifit text-black">Remote  • Full-time  • $130,000 - $175,000</p>
                <button class="w-30 bg-blue-200  p-1 rounded mr-5">${interview.apllyBtn}</button>
                <p>Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                <button class="w-30 border border-green-500 font-bold text-green-500  p-1 rounded mt-2">INTERVIEW</button>
                <button class="w-30 border border-red-500 font-bold text-red-500 p-1 rounded ">REJECTED</button>

           </div>
        `
        filteredSection.appendChild(div)
    }
}
