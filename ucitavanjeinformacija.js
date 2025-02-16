function loadPeople1() {
    const peopleList = JSON.parse(localStorage.getItem("peopleList")) || [];
    const gallery = document.querySelector(".gallery");

    if (peopleList.length === 0) {
        gallery.innerHTML = "<p>Nema prijavljenih osoba.</p>";
        return;
    }
    console.log(peopleList);
    let content = "<div class='row'>";
    peopleList.forEach((person, index) => {
        content += `
            <div class="card">
        <div class="card-title">Nestala Osoba</div>
        <div class="card-image">
            <img src="${person.slika}" alt="Slika nestale osobe">
        </div>    
         <div class="card-content">
            
            <div class="card-section red">
                <h3>1. Ime i prezime nestale osobe</h3>
                <p>${person.ime} ${person.prezime}</p>
            </div>
            <div class="card-section red">
                <h3>2. Informacije o nestanku</h3>
                <p>${person.dodatneInfo}</p>
            </div>
            
     
            <div class="card-section yellow">
                <h3>3. Grad i ulica i broj</h3>
                <p> ${person.grad}, ${person.ulica}</p>
            </div>
            <div class="card-section yellow">
                <h3>4. opis nestale osobe</h3>
                <p>${person.opis}</p>
            </div>
        </div>
    </div>
                    
                    
        `;
    });
    content += "</div>";

    gallery.innerHTML = content;
}
