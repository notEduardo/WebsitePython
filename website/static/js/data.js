var headerFinal = [];

var hFinal = [];
var tFinal = [];
var aFinal = [];
var eFinal = [];
var fFinal= [];


$(document).ready(function(){
});

function dataInit(){
	var langTemp;
	if(localStorage.getItem('myLang') == null){
        localStorage.setItem('myLang', "1");
        langTemp = 1;
    }
    else{
        langTemp = localStorage.getItem('myLang');
    }
	setWords(langTemp);
};

function setWords(lang){
	if(lang == 1){
		// Header Content
		headerFinal["lang"] = "Español";
		headerFinal["home"] = "Home";
		headerFinal["exp"] = "About Me";
		headerFinal["contact"] = "Contact";
		headerFinal["words"] = "Software Engineer";

		// Index Content
		hFinal["ehiHeader"] = "Everyone has an <span id='special-underline'>idea</span>";
		hFinal["ehiContent1"] = "Maybe you are a business that needs a website";
		hFinal["ehiContent2"] = "Maybe you have the next best app idea, for iOS or android";
		hFinal["ehiContent3"] = "Maybe you have a clever idea for a game for console or mobile";
		hFinal["ehiContent4"] = "Or maybe you just need a website to advertise yourself on";
		hFinal["ehiFooter"] = "Maybe you're at the doorstep of the next best idea but don't quite know how bring your idea to life. That's where I can help";
		hFinal["meHeader"] = "<div class='revealContain'><div class='revealDiv'></div><div class='meHeaderBlock'>I</div></div>. <div class='revealContain'><div class='revealDiv'></div><div class='meHeaderBlock'>am</div></div>. <div class='revealContain'><div class='revealDiv'></div><div class='meHeaderBlock'>Eduardo</div></div>. <div class='revealContain'><div class='revealDiv'></div><div class='meHeaderBlock'>Gonzalez</div></div>.";
		hFinal["meContent"] = "I'm a freelance software engineer with the ability to help you create your idea. I graduated Cum Laude from the University of Texas at Dallas. I have created applications for companies like Capital One. I have done undergraduate research in virtual reality and have worked with AI's like IBM's Watson. I have extensive experience and most importantly I can help you create exactly what you need.";
		hFinal["contactMeInfo"] = "I'm confident that together we can create something phenomenal";
		hFinal["contactMe"] = "Let's Create Something!";

		//About Content
		aFinal["aboutName"] = "<span class='aboutInfoID'>Name:</span> Edaurdo Alberto Gonzalez Garcia";
		aFinal["aboutOccupation"] = "<span class='aboutInfoID'>Title:</span> Software Engineer";
		aFinal["aboutSpeak"] = "<span class='aboutInfoID'>Speaks:</span> English and Spanish";
		aFinal["aboutAge"] = "<span class='aboutInfoID'>Age:</span> 23";
		aFinal["aboutFrom"] = "<span class='aboutInfoID'>From:</span> Dallas, Tx";
		aFinal["aboutEmail"] = "<span class='aboutInfoID'>Email:</span> eduardoplusplus@gmail.com";
		aFinal["aboutPower"] = "<span class='aboutInfoID'>Power Level:</span> 9000+";

		aFinal["aboutContentH"] = "Description";
		aFinal["aboutContent"] = "A curious being that spends a lot of his time programming or playing video games. Always learning something new, and always working on something. He loves making new friends, and is always looking for new opportunities!";
		
		aFinal["aboutGraphsH"] = "Attributes";
		aFinal["aboutLang"] = "Programming Languages";
		aFinal["aboutSW"] = "Software Knowledge";
		aFinal["aboutExp"] = "Programming Experience";
		aFinal["aboutLang"] = "Programming Languages";
		aFinal["aboutSW"] = "Development Experience";
		aFinal["aboutExp"] = "Software Knowledge";

		aFinal["aboutAccomplishH"] = "Victories";

		aFinal["aboutResumeH"] = "Resume";
		aFinal["resumeButton"] = "Download";
		aFinal["resumeContent"] = "This is my latest resume, I'm always looking for new opportunities. So don't hesitate to contact me.";

		// Experience Content
		eFinal["dipHeader"] = "College";
		eFinal["dipContent"] = "I studied at the University of Texas at Dallas, where I recieved my Bachelors of Science in Computer Science. I completed college in 2 and a half years. During this time I did undergraduate research in virtual reality, under Dr. Ryan McMahan. Together we tried to create an effecient method of movement inside virtual space. I got a whole semester to work with IBM's Watson, which I used to create an instance of Watson that could recognized different spanish dialects by reading the text. And got to attend Google workshops where I learned to develop Android applications. I graduated with honors, and a 3.6 GPA.";
		eFinal["nanoHeader"] = "Nanodegree";
		eFinal["nanoContent"] = "I decided to focus in on fullstack development. In order to learn what I didn't know, I enrolled in Udacity's Nanodegree program. It's a 6 month program where they lead me through the different areas of fullstack development. I learned everything from designing and animating websites to setting up a websites email and database. This knowledge grouped with my programming knowledge helps me build powerful and complex websites.";
		eFinal["aplusHeader"] = "CompTIA A+ Certification";
		eFinal["aplusContent"] = "It was strange for me to know so much about programming and software, and not know how to take apart a computer. So I pursued an A+ certification which certifies me to take apart computers without breaking warranty. I pursued this, not for the certification but for the knowledge. If there is ever a challange that I don't know how to solve, I always go out of my way to aqcuire the knowledge in order to solve it.";
		eFinal["capHeader"] = "Capital One Project";
		eFinal["capContent"] = "During my last semester in college, three friends and I got the opportunity to build 4 apps for Capital One. I signed a contract stating I couldn't talk about what the applications did, but I can talk about what they were. It was two applications and they wanted an iOS and an Andriod version of both adding up to 4 seperate applications. With a team of 4, we managed to complete this project in a little under 6 months. This project exposed me to industry software and taught me how to develop professionally.";
		
		// Footer Content
	    fFinal["mfContent"] = "I would love to work together. Leave your contact information below and I will contact you as soon as possible, or find me on my social media!";
		fFinal["tName"] = "Name";
		fFinal["tTele"] = "Telephone";
		fFinal["tEmail"] = "Email";
		fFinal["tDesc"] = "Description";
	}
	else{
		// Header Spanish Content
		headerFinal["lang"] = "English";
		headerFinal["home"] = "Casa";
		headerFinal["exp"] = "Sobre Mi";
		headerFinal["contact"] = "Contacto";
		headerFinal["words"] = "Ingeniero de Software";

		// Index Spanish Content
		hFinal["ehiHeader"] = "Todos tienen una <span id='special-underline'>idea</span>";
		hFinal["ehiContent1"] = "Tal vez tu eres un negocio que necesita un sitio web";
		hFinal["ehiContent2"] = "Quizás tengas la siguiente mejor idea de aplicacion, para iOS o Android";
		hFinal["ehiContent3"] = "Tal vez tengas una idea para un juego para consola o movil";
		hFinal["ehiContent4"] = "O tal vez solo necesitas un sitio web para publicar tus habilidades";
		hFinal["ehiFooter"] = "Pudieras estár en la puerta de la siguiente mejor idea pero no sabes como hacerlo realidad. Ahí es donde puedo ayudar";
		hFinal["meHeader"] = "<div class='revealContain'><div class='revealDiv'></div><span class='meHeaderBlock'>Yo</span></div>. <div class='revealContain'><div class='revealDiv'></div><span class='meHeaderBlock'>soy</span></div>. <div class='revealContain'><div class='revealDiv'></div><span class='meHeaderBlock'>Eduardo</span></div>. <div class='revealContain'><div class='revealDiv'></div><span class='meHeaderBlock'>Gonzalez</span></div>.";
		hFinal["meContent"] = "Soy un ingeniero de software con la capacidad de ayudarte a crear tu idea. Me gradué Cum Laude de la Universidad de Texas en Dallas. He creado aplicaciones para empresas como Capital One. He realizado estudios de pregrado en realidad virtual y he trabajado con AI como Watson de IBM. Tengo amplia experiencia y lo más importante, puedo ayudarte a crear exactamente lo que necesitas.";
		hFinal["contactMeInfo"] = "Estoy seguro de que juntos podemos crear algo fenomenal";
		hFinal["contactMe"] = "Vamos a crear algo!";

		//About Content
		aFinal["aboutName"] = "<span class='aboutInfoID'>Nombre:</span> Eduardo Alberto Gonzalez Garcia";
		aFinal["aboutOccupation"] = "<span class='aboutInfoID'>Titulo:</span> Ingeniero de Software";
		aFinal["aboutSpeak"] = "<span class='aboutInfoID'>Habla:</span> English and Spanish";
		aFinal["aboutAge"] = "<span class='aboutInfoID'>Edad:</span> 23";
		aFinal["aboutFrom"] = "<span class='aboutInfoID'>De:</span> Dallas, Tx";
		aFinal["aboutEmail"] = "<span class='aboutInfoID'>Correo:</span> eduardoplusplus@gmail.com";
		aFinal["aboutPower"] = "<span class='aboutInfoID'>Nivel de Poder:</span> 9000+";

		aFinal["aboutContentH"] = "Descripcion";
		aFinal["aboutContent"] = "Un ser curioso que pasa mucho tiempo programando o jugando video juegos. Siempre aprendiendo algo nuevo, y siempre trabajando en algo. Le encanta hacer nuevos amigos y siempre está buscando nuevas oportunidades.";
		
		aFinal["aboutGraphsH"] = "Atributos";
		aFinal["aboutLang"] = "Lenguajes de Programacion";
		aFinal["aboutSW"] = "Conocimiento de Software";
		aFinal["aboutExp"] = "Experiencia en Programacion";

		aFinal["aboutAccomplishH"] = "Victorias";

		aFinal["aboutResumeH"] = "Curríiculum";
		aFinal["resumeButton"] = "Descargar";
		aFinal["resumeContent"] = "Este es mi ultimo curriculum, siempre estoy buscando nuevas oportunidades. Asi que no dudes en ponerte en contacto conmigo.";

		// Experience Spanish Content
	  	eFinal["dipHeader"] = "Universidad";
		eFinal["dipContent"] = "Estudie en la Universidad de Texas en Dallas, y obtuve mi Licenciatura en Ciencias de Computacion. Logre terminar en 2 años y medio. Durante este tiempo, realice investigaciones en realidad virtual, con el Dr. Ryan McMahan. Juntos intentamos crear un metodo de movimiento eficiente dentro del espacio virtual. Conseguí todo un semestre para trabajar con Watson de IBM, que utilice para crear una instancia de Watson que pudiera reconocer diferentes dialectos españoles. Y pude asistir a talleres de Google donde aprendí a desarrollar aplicaciones de Android. Me gradue con honores y un GPA de 3.6";
		eFinal["nanoHeader"] = "Título menor";
		eFinal["nanoContent"] = "Decidi enforcarme en la programacion web completa. Para aprender lo que no sabia, me inscribi en el programa Nanogrado de Udacity. Es un programa de 6 meses en el que me guiaron a traves de las diferentes areas de programacion web completa. Aprendi de todo, desde diseñar y animar sitios web hasta configurar un correo electronico y una base de datos de sitios web. Este conocimiento agrupado con mi conocimiento de programacion me ayuda a construir sitios web poderosos y complejos.";
	 	eFinal["aplusHeader"] = "CompTIA A+ Certificacion";
		eFinal["aplusContent"] = "Fue extraño para mi saber tanto sobre programacion y software, y no saber como desarmar una computadora. Asi que consegui una certificacion A+ que me certifica a desarmar computadoras sin romper la garantia. Consegui esto, no por la certificacion sino por el conocimiento. Si alguna vez hay un desafío que no se como resolver, salgo de mi camino para obtener el conocimiento para resolverlo ";
		eFinal["capHeader"] = "Proyecto de Capital One";
		eFinal["capContent"] = "Durante mi ultimo semestre en la universidad, tres amigos y yo tuvimos la oportunidad de crear 4 aplicaciones para Capital One. Firme un contrato que decia que no podia hablar sobre lo que hacian las aplicaciones, pero puedo hablar de lo que eran. Fueron dos aplicaciones y querian una version de iOS y otra de Andriod que sumaron 4 aplicaciones separadas. Con un equipo de 4, logramos completar este proyecto en poco menos de 6 meses. Este proyecto me enseño a programar profesionalmente.";
		
		// Footer Spanish Content
	    fFinal["mfContent"] = "Me encantaria trabajar juntos. Deje su informacion de contacto con una breve descripcion de su idea y el software que necesita, y me comunicare con usted en no más de 2 dias.";
		fFinal["tName"] = "Nombre";
		fFinal["tTele"] = "Telefono";
		fFinal["tEmail"] = "Email";
		fFinal["tDesc"] = "Descripción";
	}

};
