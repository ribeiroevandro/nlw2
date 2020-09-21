document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {

   const NewFieldContainer = document.querySelector('.schedule-item').cloneNode(true)


    const fields = NewFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value=""

    })
    
    document.querySelector('#schedule-item').appendChild(NewFieldContainer)
}