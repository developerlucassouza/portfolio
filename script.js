// Carregar Meta Dados
{

let head = document.querySelector('head');

head.innerHTML += `

<!-- Favicon -->
<link rel="shortcut icon" href="imgs/maleta-icon.png" type="image/x-icon">

<!-- Booststrap -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

<!-- DevIcon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
          

<!-- CSS Personalizado -->
<link rel="stylesheet" href="style.css" type="text/css">

`;

}

// Carregar Nav 
{

let header = document.querySelector("header");

header.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" href="index.html"><i class="fa-solid fa-code text-danger"></i> Lucas Souza</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado"
        aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="fa-solid fa-bars text-light"></i>
    </button>

    <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
        <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
                <a class="nav-link" href="projetos.html">
                    <i class="fa-solid fa-terminal"></i> Projetos
                </a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa-solid fa-address-card"></i> Contato
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <!-- WhatsApp -->
                    <a class="dropdown-item" target="_blank" href="https://wa.me/qr/P4HLMIQXLEPFC1"><i class="fa-brands fa-whatsapp"></i> +55 (11) 98144-4984</a>

                    <!-- Email -->
                    <a class="dropdown-item" target="_blank" href="mailto:lucas10souza9@gmail.com"><i class="fa-solid fa-envelope"></i> lucas10souza9@gmail.com</a>

                    <!-- Instagram -->
                    <a class="dropdown-item" target="_blank" 
                    href="https://www.instagram.com/lucassouza.py/">
                    <!-- ?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA== -->
                        <i class="fa-brands fa-instagram"></i> @lucassouza.py
                    </a>

                    <!-- GitHub -->
                    <a class="dropdown-item" target="_blank" href="https://github.com/developerlucassouza">
                        <i class="fa-brands fa-github"></i> developerlucassouza
                    </a>

                    <!-- LinkedIn -->
                    <a class="dropdown-item" target="_blank" href="https://linkedin.com/in/lucas-souza-a65243289">
                        <i class="fa-brands fa-linkedin"></i> Lucas Souza
                    </a>

                </div>
            </li>
        </ul>
    </div>
</nav>

`;

}