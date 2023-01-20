function render_header(){

    header_a.innerHTML = `
        <header class="d-flex flex-wrap justify-content-center mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src="images/logotipo.png" style="margin-x: 30em" height="100px"></img>
                <span class="fs-4">Docinhos da Giu</span>
            </a>

            <div style="margin-top: 40px; margin-bottom: 30px;">
                <ul class="nav nav-pills">
                   <!-- <li class="nav-item"><a href="#header_a" class="nav_1">Início</a></li> -->
                   <li class="nav-item"><a href="#produtos" class="nav_1">Doces</a></li>
                   <li class="nav-item"><a href="#combos" class="nav_1">Combos</a></li>
                    <li class="nav-item"><a href="#" class="nav_1">Contato</a></li>
                    <li class="nav-item"><a href="#" class="nav_1">Sobre</a></li>
                </ul>
            </div>
        </header>
    `

}