Survey.StylesManager.applyTheme("modern");

var json = {
		
	"title": "Survey Title&Logo demo",
    "logo": "https://surveyjs.io/favicon.ico",
    "logoWidth": 60,
    "logoHeight": 60,
    showQuestionNumbers: "off",
	"pages" : [ 
		{
		"name" : "Dados do Paciente",
		"title" : "Dados do Paciente",
		"elements" : [

		{
			type : "text",
			name : "name",
			title : "Nome Completo:"
		}, {
			type : "text",
			name : "email",
			title : "E-mail:"
		}, {
			type : "text",
			name : "fone",
			title : "Telefone:"
		}]
	},
	{
		"name" : "Sintomas e Limitações Funcionais",
		"title" : "Sintomas e Limitações Funcionais",
		"description": "As seguintes questões perguntam sobre sintomas que você possa estar sentindo no seu quadril e sobre a função do seu quadril com relação a suas atividades diárias. Por favor, tente lembrar-se de como você tem se sentido durante a maior parte do tempo deste último mês e responda.",	    
		"elements" : [

		{
			type : "rating",
			name : "p1",
			title : "É difícil para você caminhar longas distâncias?",
			isRequired : true,
			rateMin : 1,
			rateMax : 10,
			minRateDescription : "Muito difícil",
			maxRateDescription : "Nenhuma dificuldade"
		}, 
		{
			type : "rating",
			name : "p2",
			title : "É difícil para você abaixar e levantar-se do chão?",
			isRequired : true,
			rateMin : 1,
			rateMax : 10,
			minRateDescription : "Muito difícil",
			maxRateDescription : "Nenhuma dificuldade"
		}, 
		{
			type : "rating",
			name : "p3",
			title : "É difícil para você deitar-se do lado do quadril com problema?",
			isRequired : true,
			rateMin : 1,
			rateMax : 10,
			minRateDescription : "Muito difícil",
			maxRateDescription : "Nenhuma dificuldade"
		}, 
		{
			type : "rating",
			name : "p4",
			title : "Qual é sua dificuldade com rangidos, travadas e estalos no seu quadril?",
			isRequired : true,
			rateMin : 1,
			rateMax : 10,
			minRateDescription : "Muita dificuldade",
			maxRateDescription : "Nenhuma dificuldade"
		}, 
		{
			type : "rating",
			name : "p5",
			title : "Em geral, você tem dor no quadril/virilha?",
			isRequired : true,
			rateMin : 1,
			rateMax : 10,
			minRateDescription : "Muita dor",
			maxRateDescription : "Nenhuma dor"
		}
		]
	},
	{
		"name" : "Esportes e Atividades Recreativas",
		"title" : "Esportes e Atividades Recreativas",
		"description": "As seguintes questões perguntam sobre o que você sente no seu quadril, quando participa de esportes e atividades recreativas. Por favor, tente lembrar-se de como você tem se sentido durante a maior parte do tempo deste último mês e responda.",
		"elements" : [

		{
			type : "rating",
			name : "p6",
			title : "Quanto você se preocupa sobre a sua capacidade de manter o nível de preparo físico que você deseja?",
			isRequired : true,
			rateMin : 1,
			rateMax : 10,
			minRateDescription : "Muito",
			maxRateDescription : "Não me preocupo"
		}, 
		{
			type : "rating",
			name : "p7",
			title : "Quanta dor você sente no quadril depois de praticar alguma atividade?",
			isRequired : true,
			rateMin : 1,
			rateMax : 10,
			minRateDescription : "Muita Dor",
			maxRateDescription : "Nenhuma Dor"
		},
        {
	        type: "radiogroup",
	        name: "p8Boolean",
	        "title": "Quanto você se preocupa em mudanças rapidas de direção nos seus esportes ou atividades recreativas?",
            "description": "Faço esse movimento em minhas atividades.",
	        isRequired: true,
	        choices: [
	            "Sim", "Não"
	        ],
	        colCount: 0
        },
		{
			type : "rating",
			name : "p8",
			title : "Quanto você se preocupa em mudanças rapidas de direção nos seus esportes ou atividades recreativas?",
			isRequired : false,
			visibleIf: "{p8Boolean}='Sim'",
			rateMin : 1,
			rateMax : 10,
			minRateDescription : "Muito",
			maxRateDescription : "Não me preocupo"
		}, 
		]
	},
	{
		"name" : "Considerações Relacionadas ao Trabalho",
		"title" : "Considerações Relacionadas ao Trabalho",
		"description": "As questões seguintes se referem ao que você sente no seu quadril durante o seu trabalho e suas atividades ocupacionais. Por favor, procure lembrar-se de como você tem se sentido na maior parte do tempo neste último mês e responda.",
		"elements" : [
			
	        {
		        type: "radiogroup",
		        name: "retired",
		        "title": "Sou aposentado.",
		        isRequired: true,
		        choices: [
		            "Sim", "Não"
		        ],
		        colCount: 0
	        },
	        {
	        	type: "radiogroup",
	            "name": "unemployed",
	            "title": "Não trabalho por razões diversas à condição do meu quadril.",
	            visibleIf: "{retired}='Não'",
	            "isRequired": false,
	            choices: [
	                "Sim", "Não"
	            ],
		        colCount: 0
	        },
	        {
	        	type: "radiogroup",
	            "name": "p9Boolean",
	            "title": "Qual é sua dificuldade para empurrar, puxar, levantar ou carregar objetos pesados em seu trabalho?",
	            "description": "Faço esse movimento em minhas atividades.",
	            visibleIf: "{unemployed}='Não'",
	            "isRequired": false,
	            choices: [
	                "Sim", "Não"
	            ],
		        colCount: 0
	        },
			{
				type : "rating",
				name : "p9",
				title : "Qual é sua dificuldade para empurrar, puxar, levantar ou carregar objetos pesados em seu trabalho?",
				isRequired : false,
				visibleIf: "{p9Boolean}='Sim'",
				rateMin : 1,
				rateMax : 10,
				minRateDescription : "Muita dificuldade",
				maxRateDescription : "Nenhuma dificuldade"
			}, 
			{
				type : "rating",
				name : "p10",
				title : "Quanta dificuldade você tem no seu trabalho devido à mobilidade reduzida no quadril?",
				isRequired : false,
				visibleIf: "{unemployed}='Não'",
				rateMin : 1,
				rateMax : 10,
				minRateDescription : "Muita dificuldade",
				maxRateDescription : "Nenhuma dificuldade"
			}
		]
	},
	{
		"name" : "Considerações Sociais, Emocionais e de Estilo de Vida",
		"title" : "Considerações Sociais, Emocionais e de Estilo de Vida",
		"description": "As seguintes perguntas se referem a algumas considerações sociais, emocionais e de estilo de vida que você possa estar sentindo com relação a seu problema no quadril. Por favor, tente lembrar-se de como você tem se sentido durante a maior parte do tempo deste último mês e responda.",
		"elements" : [
			
	        {
	        	type: "radiogroup",
	            "name": "p11Boolean",
	            "title": "Quanto sua atividade sexual é prejudicada por causa do seu quadril?",
	            "description": "Isto é importante para mim.",
	            "isRequired": true,
	            choices: [
	                "Sim", "Não"
	            ],
		        colCount: 0
	        },
			{
				type : "rating",
				name : "p11",
				title : "Quanto sua atividade sexual é prejudicada por causa do seu quadril?",
				isRequired : false,
				visibleIf: "{p11Boolean}='Sim'",
				rateMin : 1,
				rateMax : 10,
				minRateDescription : "Muito problema",
				maxRateDescription : "Nenhum problema"
			}, 
			{
				type : "rating",
				name : "p12",
				title : "A sua lesão no quadril o incomoda?",
				isRequired : true,
				rateMin : 1,
				rateMax : 10,
				minRateDescription : "Incomoda muito",
				maxRateDescription : "Não incomoda"
			},
			{
				type: "radiogroup",
	            "name": "p13Boolean",
	            "title": "Quanto você se preocupa em pegar ou carregar uma criança no colo por causa de seu problema no quadril?",
	            "description": "Faço esse movimento em minhas atividades.",
	            "isRequired": true,
	            choices: [
	                "Sim", "Não"
	            ],
		        colCount: 0
	        },
			{
				type : "rating",
				name : "p13",
				title : "Quanto você se preocupa em pegar ou carregar uma criança no colo por causa de seu problema no quadril?",
				isRequired : false,
				visibleIf: "{p13Boolean}='Sim'",
				rateMin : 1,
				rateMax : 10,
				minRateDescription : "Muito",
				maxRateDescription : "Não me preocupo"
			}, 
			{
				type : "rating",
				name : "p14",
				title : "Você se preocupa constantemente com seu problema de quadril?",
				isRequired : true,
				rateMin : 1,
				rateMax : 10,
				minRateDescription : "Constatemente",
				maxRateDescription : "Nunca"
			} 
		]
	}
	]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {

	var getUrl = window.location;
	var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
	var urlDados = baseUrl+'/rest/survey/mhot';
	$.ajax({
		type : 'POST',
		url : urlDados,
		data : JSON.stringify(result.data, null, 3),
		success : function(data) {
			alert('data: ' + data);
		},
		contentType : "application/json",
		dataType : 'json'
	});
    alert(urlDados); 
});

survey.data = {
	name : 'João da Silva',
	email : 'joao@host.com',
	fone : '(XX)XXXXXXXXX'
};

$("#surveyElement").Survey({
	model : survey
});