Survey.StylesManager.applyTheme("modern");

var json = {
		
	"title": "Survey Title&Logo demo",
    "logo": "https://surveyjs.io/favicon.ico",
    "logoWidth": 60,
    "logoHeight": 60,
    showQuestionNumbers: "off",
	"pages" : [ 
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
	        isRequired: false,
	        choices: [
	        	"Não faço esse movimento em minhas atividades."
	        ],
	        colCount: 0
        },
		{
			type : "rating",
			name : "p8",
			title : " ",
			isRequired : false,
			visibleIf: "{p8Boolean} empty",
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
		        "title": " ",
		        isRequired: false,
		        choices: [
		            "Sou aposentado."
		        ],
		        colCount: 0
	        },
	        {
	        	type: "radiogroup",
	            "name": "unemployed",
	            "title": " ",
	            visibleIf: "{retired} empty",
	            "isRequired": false,
	            choices: [
	                "Não trabalho por razões diversas à condição do meu quadril."
	            ],
		        colCount: 0
	        },
	        {
	        	type: "radiogroup",
	            "name": "p9Boolean",
	            "title": "Qual é sua dificuldade para empurrar, puxar, levantar ou carregar objetos pesados em seu trabalho?",
	            visibleIf: "{retired} empty and {unemployed} empty",
	            "isRequired": false,
	            choices: [
	            	"Não faço esse movimento em minhas atividades."
	            ],
		        colCount: 0
	        },
			{
				type : "rating",
				name : "p9",
				title : " ",
				isRequired : false,
				visibleIf: "{retired} empty and {unemployed} empty and {p9Boolean} empty",
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
				visibleIf: "{retired} empty and {unemployed} empty",
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
	            "isRequired": false,
	            choices: [
	            	"Isto não é importante para mim."
	            ],
		        colCount: 0
	        },
			{
				type : "rating",
				name : "p11",
				title : " ",
				isRequired : false,
				visibleIf: "{p11Boolean} empty",
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
	            "isRequired": false,
	            choices: [
	            	"Não faço esse movimento em minhas atividades."
	            ],
		        colCount: 0
	        },
			{
				type : "rating",
				name : "p13",
				title : " ",
				isRequired : false,
				visibleIf: "{p13Boolean} empty",
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
	
	var url = new URL(getUrl);
	var hash = url.searchParams.get("hash");
	
	var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
	var urlDados = baseUrl+'/rest/survey/mhot/'+hash;
	
	
	
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
    alert(JSON.stringify(result.data, null, 3)); 
    alert(urlDados);
});

$("#surveyElement").Survey({
	model : survey
});