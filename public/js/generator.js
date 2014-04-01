function generateCode()
{
//Each block of generated code is a string which starts out empty.

	var generatedXMLCode = String("");

	var results = $("#results");
	
//Each element is an array, we use JQuery to find every input row starting with the right name (titleRow, creatorRow, etc.)
//For qualified we're also checking the "type" and "encoding" select menus to check for qualified terms and encoding schemes.

	var title = [];
	title = $('input[name="titleRow"]');
	
	var titleType = [];
	titleType = $('select[name="titleType"]');
	
	var creator = [];
	creator = $('input[name="creatorRow"]');

	var creatorType = [];
	creatorType = $('select[name="creatorType"]');

	var institution = [];
	institution = $('input[name="institutionRow"]');

	var discipline = [];
	discipline = $('input[name="disciplineRow"]');
	
	var subject = [];
	subject = $('input[name="subjectRow"]');
	
	var subjectType = [];
	subjectType = $('select[name="subjectType"]');
	
	var description = [];
	description = $('textarea[name="descriptionRow"]');
	
	var descriptionType = [];
	descriptionType = $('select[name="descriptionType"]');
	
	var publisher = [];
	publisher = $('input[name="publisherRow"]');
	
	var contributor = [];
	contributor = $('input[name="contributorRow"]');

	var contributorType = [];
	contributorType = $('select[name="contributorType"]');

	var cinstitution = [];
	cinstitution = $('input[name="cinstitutionRow"]');

	var cdiscipline = [];
	cdiscipline = $('input[name="cdisciplineRow"]');
	
	var date = [];
	date = $('input[name="dateRow"]');
	
	var dateType = [];
	dateType = $('select[name="dateType"]');
	
	var dateEncoding = [];
	dateEncoding = $('select[name="dateEncoding"]');
	
	var typeType = [];
	typeType = $('select[name="typeType"]');
	
	var format = [];
	format = $('input[name="formatRow"]');
	
	var formatType = [];
	formatType = $('select[name="formatType"]');
	
	var formatEncoding = [];
	formatEncoding = $('select[name="formatEncoding"]');
	
	var identifier = [];
	identifier = $('input[name="identifierRow"]');
	
	var identifierEncoding = [];
	identifierEncoding = $('select[name="identifierEncoding"]');
	
	var source = [];
	source = $('input[name="sourceRow"]');
	
	var sourceType = [];
	sourceType = $('select[name="sourceType"]');
	
	var language = [];
	language = $('input[name="languageRow"]');
	
	var languageType = [];
	languageType = $('select[name="languageType"]');
	
	var relation = [];
	relation = $('input[name="relationRow"]');
	
	var relationType = [];
	relationType = $('select[name="relationType"]');
	
	var relationEncoding = [];
	relationEncoding = $('select[name="relationEncoding"]');
	
	var coverage = [];
	coverage = $('input[name="coverageRow"]');
	
	var coverageType = [];
	coverageType = $('select[name="coverageType"]');
	
	var coverageEncoding = [];
	coverageEncoding = $('select[name="coverageEncoding"]');
	
	var rights = [];
	rights = $('input[name="rightsRow"]');
	
	var rightsType = [];
	rightsType = $('select[name="rightsType"]');
	
	var rightsEncoding = [];
	rightsEncoding = $('select[name="rightsEncoding"]');
	
	var edition = [];
	edition = $('input[name="editionRow"]');
	
	var editionType = [];
	editionType = $('select[name="editionType"]');
	
	var marc = [];
	marc = $('input[name="marcRow"]');

	var marcEncoding = [];
	marcEncoding = $('select[name="marcEncoding"]');

	var degree = [];
	degree = $('input[name="degreeRow"]');
	
	var degreegrantor = [];
	degreegrantor = $('input[name="degreegrantorRow"]');

	var degreediscipline = [];
	degreediscipline = $('input[name="degreedisciplineRow"]');

	var degreelevel = [];
	degreelevel = $('input[name="degreelevelRow"]');
	
//Additional output options
	var adddeclaration = $("#adddeclaration");
	var addroot = $("#addroot");
	var adddc = $("#adddc");
	var addqualified = $("#addqualified");
	var addhead = $("#addhead");
	var addtitle = $("#addtitle");
	var addlink = $("#addlink");
	var addlinkqualified = $("#addlinkqualified");
	var adddeclarationhtml = $("#adddeclarationhtml");
	var adddeclarationxhtml = $("#adddeclarationxhtml");
	var addheadx = $("#addheadx");
	var addtitlex = $("#addtitlex");
	var addlinkx = $("#addlinkx");
	var addlinkxqualified = $("#addlinkxqualified");
	
//XML options//
generatedXMLCode +="<?xml version=\"1.0\" encoding=\"UTF-8\"?>"  + '\n';
generatedXMLCode +="<dublincore xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"";
generatedXMLCode +=" xmlns:dc=\"http://purl.org/dc/elements/1.1/\"";
generatedXMLCode +=">" + '\n';

//get element//

	for(i=0; i<=title.length-1; i++) {
	if((title[i].value.indexOf("http://") > -1) || (title[i].value.indexOf("www.") > -1) && (titleType[i].selectedIndex == "0")){
	generatedXMLCode += "<dc:title>" + title[i].value + "</dc:title>" + '\n';
	}
	else if((title[i].value != "") && (titleType[i].selectedIndex == "0")){
	generatedXMLCode += "<dc:title>" + title[i].value + "</dc:title>" + '\n';
	}
	else if((title[i].value.indexOf("http://") > -1) || (title[i].value.indexOf("www.") > -1) && (titleType[i].selectedIndex == "1")){
	generatedXMLCode += "<dc:title.alternative>" + title[i].value + "</dc:title.alternative>" + '\n';
	}
	else if((title[i].value != "") && (titleType[i].selectedIndex == "1")){
	generatedXMLCode += "<dc:title.alternative>" + title[i].value + "</dc:title.alternative>" + '\n';
	}
}

	for(i=0; i<=creator.length-1; i++) {
	if((creator[i].value.indexOf("http://") > -1) || (creator[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:creator>" + creator[i].value + "</dc:creator>" + '\n'; 
	}
	else if((creator[i].value != "") && (creatorType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:creator>" + creator[i].value + "</dc:creator>" + '\n';
		if (institution[i].value != ""){
			generatedXMLCode += "<dc:creator.institution>" + institution[i].value + "</dc:creator.institution>" + '\n'; 
		}
		if (discipline[i].value != ""){
			generatedXMLCode += "<dc:creator.discipline>" + discipline[i].value + "</dc:creator.discipline>" + '\n'; 
		}
	}
	else if((creator[i].value != "") && (creatorType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:creator role=\"著\">" + creator[i].value + "</dc:creator>" + '\n'; 
		if (institution[i].value != ""){
			generatedXMLCode += "<dc:creator.institution>" + institution[i].value + "</dc:creator.institution>" + '\n'; 
		}
		if (discipline[i].value != ""){
			generatedXMLCode += "<dc:creator.discipline>" + discipline[i].value + "</dc:creator.discipline>" + '\n'; 
		}
	}
	else if((creator[i].value != "") && (creatorType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:creator role=\"编\">" + creator[i].value + "</dc:creator>" + '\n'; 
		if (institution[i].value != ""){
			generatedXMLCode += "<dc:creator.institution>" + institution[i].value + "</dc:creator.institution>" + '\n'; 
		}
		if (discipline[i].value != ""){
			generatedXMLCode += "<dc:creator.discipline>" + discipline[i].value + "</dc:creator.discipline>" + '\n'; 
		}
	}
	else if((creator[i].value != "") && (creatorType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:creator role=\"撰\">" + creator[i].value + "</dc:creator>" + '\n'; 
		if (institution[i].value != ""){
			generatedXMLCode += "<dc:creator.institution>" + institution[i].value + "</dc:creator.institution>" + '\n'; 
		}
		if (discipline[i].value != ""){
			generatedXMLCode += "<dc:creator.discipline>" + discipline[i].value + "</dc:creator.discipline>" + '\n'; 
		}
	}
}

	for(i=0; i<=subject.length-1; i++) {
	if((subject[i].value.indexOf("http://") > -1) || (subject[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:subject>" + subject[i].value + "</dc:subject>" + '\n'; 
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:subject>" + subject[i].value + "</dc:subject>" + '\n'; 
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:subject xsi:type=\"CT\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:subject xsi:type=\"CCT\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:subject xsi:type=\"CLC\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:subject xsi:type=\"SKC\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:subject xsi:type=\"LCCAS\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:subject xsi:type=\"LCSH\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dc:subject xsi:type=\"MESH\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dc:subject xsi:type=\"DDC\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "9")){	
	generatedXMLCode += "<dc:subject xsi:type=\"LCC\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "10")){	
	generatedXMLCode += "<dc:subject xsi:type=\"UDC\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
}

	for(i=0; i<=contributor.length-1; i++) {
	if((contributor[i].value.indexOf("http://") > -1) || (contributor[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:contributor>" + contributor[i].value + "</dc:contributor>" + '\n'; 
	}
	else if((contributor[i].value != "") && (contributorType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:contributor>" + contributor[i].value + "</dc:contributor>" + '\n';
		if (cinstitution[i].value != ""){
			generatedXMLCode += "<dc:contributor.institution>" + cinstitution[i].value + "</dc:contributor.institution>" + '\n'; 
		}
		if (cdiscipline[i].value != ""){
			generatedXMLCode += "<dc:contributor.discipline>" + cdiscipline[i].value + "</dc:contributor.discipline>" + '\n'; 
		}
	}
	else if((contributor[i].value != "") && (contributorType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:contributor role=\"著\">" + contributor[i].value + "</dc:contributor>" + '\n'; 
		if (cinstitution[i].value != ""){
			generatedXMLCode += "<dc:contributor.institution>" + cinstitution[i].value + "</dc:contributor.institution>" + '\n'; 
		}
		if (cdiscipline[i].value != ""){
			generatedXMLCode += "<dc:contributor.discipline>" + cdiscipline[i].value + "</dc:contributor.discipline>" + '\n'; 
		}
	}
	else if((contributor[i].value != "") && (contributorType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:contributor role=\"编\">" + contributor[i].value + "</dc:contributor>" + '\n'; 
		if (cinstitution[i].value != ""){
			generatedXMLCode += "<dc:contributor.institution>" + cinstitution[i].value + "</dc:contributor.institution>" + '\n'; 
		}
		if (cdiscipline[i].value != ""){
			generatedXMLCode += "<dc:contributor.discipline>" + cdiscipline[i].value + "</dc:contributor.discipline>" + '\n'; 
		}
	}
	else if((contributor[i].value != "") && (contributorType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:contributor role=\"撰\">" + contributor[i].value + "</dc:contributor>" + '\n'; 
		if (cinstitution[i].value != ""){
			generatedXMLCode += "<dc:contributor.institution>" + cinstitution[i].value + "</dc:contributor.institution>" + '\n'; 
		}
		if (cdiscipline[i].value != ""){
			generatedXMLCode += "<dc:contributor.discipline>" + cdiscipline[i].value + "</dc:contributor.discipline>" + '\n'; 
		}
	}
}

	for(i=0; i<=description.length-1; i++) {
	if((description[i].value.indexOf("http://") > -1) || (description[i].value.indexOf("www.") > -1) && (descriptionType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	}
	else if((description[i].value != "") && (descriptionType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	}
	else if((description[i].value.indexOf("http://") > -1) || (description[i].value.indexOf("www.") > -1) && (descriptionType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	}
	else if((description[i].value != "") && (descriptionType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:description.abstract>" + description[i].value + "</dc:description.abstract>" + '\n';          
	}
	else if((description[i].value.indexOf("http://") > -1) || (description[i].value.indexOf("www.") > -1) && (descriptionType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	}
	else if((description[i].value != "") && (descriptionType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:description.accrualPeriodicity>" + description[i].value + "</dc:description.accrualPeriodicity>" + '\n';          
	}
	else if((description[i].value.indexOf("http://") > -1) || (description[i].value.indexOf("www.") > -1) && (descriptionType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	}
	else if((description[i].value != "") && (descriptionType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:description.tableOfContents>" + description[i].value + "</dc:description.tableOfContents>" + '\n';          
	}
	else if((description[i].value.indexOf("http://") > -1) || (description[i].value.indexOf("www.") > -1) && (descriptionType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	}
	else if((description[i].value != "") && (descriptionType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:description.fund>" + description[i].value + "</dc:description.fund>" + '\n';          
	}
}

	for(i=0; i<=publisher.length-1; i++) {
	if((publisher[i].value.indexOf("http://") > -1) || (publisher[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:publisher>" + publisher[i].value + "</dc:publisher>" + '\n'; 
	}
	else if(publisher[i].value != ""){	
	generatedXMLCode += "<dc:publisher>" + publisher[i].value + "</dc:publisher>" + '\n'; 
	}
}

	for(i=0; i<=date.length-1; i++) {
	if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date>" + date[i].value + "</dc:date>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date>" + date[i].value + "</dc:date>" + '\n'; 
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:date.created>" + date[i].value + "</dc:date.created>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:date.created>" + date[i].value + "</dc:date.created>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:date.valid>" + date[i].value + "</dc:date.valid>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:date.valid>" + date[i].value + "</dc:date.valid>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:date.available>" + date[i].value + "</dc:date.available>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:date.available>" + date[i].value + "</dc:date.available>" + '\n'; 
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:date.issued>" + date[i].value + "</dc:date.issued>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:date.issued>" + date[i].value + "</dc:date.issued>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:date.modified>" + date[i].value + "</dc:date.modified>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:date.modified>" + date[i].value + "</dc:date.modified>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:date.dateAccepted>" + date[i].value + "</dc:date.dateAccepted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:date.dateAccepted>" + date[i].value + "</dc:date.dateAccepted>" + '\n'; 
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dc:date.dateCopyrighted>" + date[i].value + "</dc:date.dateCopyrighted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dc:date.dateCopyrighted>" + date[i].value + "</dc:date.dateCopyrighted>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dc:date.dateSubmitted>" + date[i].value + "</dc:date.dateSubmitted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dc:date.dateSubmitted>" + date[i].value + "</dc:date.dateSubmitted>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dc:date.dateSubmitted>" + date[i].value + "</dc:date.dateSubmitted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dc:date.dateSubmitted>" + date[i].value + "</dc:date.dateSubmitted>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date xsi:type=\"Period\">" + date[i].value + "</dc:date>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:date.created xsi:type=\"Period\">" + date[i].value + "</dc:date.created>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:date.valid xsi:type=\"Period\">" + date[i].value + "</dc:date.valid>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:date.available xsi:type=\"Period\">" + date[i].value + "</dc:date.available>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:date.issued xsi:type=\"Period\">" + date[i].value + "</dc:date.issued>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:date.modified xsi:type=\"Period\">" + date[i].value + "</dc:date.modified>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:date.dateAccepted xsi:type=\"Period\">" + date[i].value + "</dc:date.dateAccepted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dc:date.dateCopyrighted xsi:type=\"Period\">" + date[i].value + "</dc:date.dateCopyrighted>" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dc:date.dateSubmitted xsi:type=\"Period\">" + date[i].value + "</dc:date.dateSubmitted>" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "9")){	
	generatedXMLCode += "<dc:date.replied xsi:type=\"Period\">" + date[i].value + "</dc:date.replied>" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date xsi:type=\"ISO8601\">" + date[i].value + "</dc:date>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:date.created xsi:type=\"ISO8601\">" + date[i].value + "</dc:date.created>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:date.valid xsi:type=\"ISO8601\">" + date[i].value + "</dc:date.valid>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:date.available xsi:type=\"ISO8601\">" + date[i].value + "</dc:date.available>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:date.issued xsi:type=\"ISO8601\">" + date[i].value + "</dc:date.issued>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:date.modified xsi:type=\"ISO8601\">" + date[i].value + "</dc:date.modified>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:date.dateAccepted xsi:type=\"ISO8601\">" + date[i].value + "</dc:date.dateAccepted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dc:date.dateCopyrighted xsi:type=\"ISO8601\">" + date[i].value + "</dc:date.dateCopyrighted>" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dc:date.dateSubmitted xsi:type=\"ISO8601\">" + date[i].value + "</dc:date.replied>" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "9")){	
	generatedXMLCode += "<dc:date.replied xsi:type=\"ISO8601\">" + date[i].value + "</dc:date.replied>" + '\n';
	}
}

	for(i=0; i<=format.length-1; i++) {
	if((format[i].value.indexOf("http://") > -1) || (format[i].value.indexOf("www.") > -1) && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:format>" + format[i].value + "</dc:format>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:format>" + format[i].value + "</dc:format>" + '\n'; 
	}
	else if((format[i].value.indexOf("http://") > -1) || (format[i].value.indexOf("www.") > -1) && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:format.extent>" + format[i].value + "</dc:format.extent>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:format.extent>" + format[i].value + "</dc:format.extent>" + '\n'; 
	}
	else if((format[i].value.indexOf("http://") > -1) || (format[i].value.indexOf("www.") > -1) && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:format.scanResolution>" + format[i].value + "</dc:format.scanResolution>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:format.scanResolution>" + format[i].value + "</dc:format.scanResolution>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "1") && (formatType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:format xsi:type=\"MIME\">" + format[i].value + "</dc:format>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "1") && (formatType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:format.extent xsi:type=\"MIME\">" + format[i].value + "</dc:format.extent>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "1") && (formatType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:format.scanResolution xsi:type=\"MIME\">" + format[i].value + "</dc:format.scanResolution>" + '\n'; 
	}
}

	for(i=0; i<=typeType.length-1; i++) {
	if(typeType[i].selectedIndex == "0"){	
	generatedXMLCode += "<dc:type>" + "图书" + "</dc:type>" + '\n'; 
	}
	else if(typeType[i].selectedIndex == "1"){	
	generatedXMLCode += "<dc:type>" + "古籍" + "</dc:type>" + '\n';          
	}
	else if(typeType[i].selectedIndex == "2"){	
	generatedXMLCode += "<dc:type>" + "民国图书" + "</dc:type>" + '\n';          
	}
	else if(typeType[i].selectedIndex == "3"){	
	generatedXMLCode += "<dc:type>" + "期刊" + "</dc:type>" + '\n';          
	}
	else if(typeType[i].selectedIndex == "4"){	
	generatedXMLCode += "<dc:type>" + "民国期刊" + "</dc:type>" + '\n';          
	}
	else if(typeType[i].selectedIndex == "5"){	
	generatedXMLCode += "<dc:type>" + "学位论文" + "</dc:type>" + '\n';          
	}
}

	for(i=0; i<=source.length-1; i++) {
	if((source[i].value.indexOf("http://") > -1) || (source[i].value.indexOf("www.") > -1) && (sourceType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:source>" + source[i].value + "</dc:source>" + '\n'; 
	}
	else if((source[i].value != "") && (sourceType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:source>" + source[i].value + "</dc:source>" + '\n'; 
	}
	else if((source[i].value != "") && (sourceType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:source xsi:type=\"dcterms:URI\">" + source[i].value + "</dc:source>" + '\n'; 
	}
}

	for(i=0; i<=language.length-1; i++) {
	if((language[i].value.indexOf("http://") > -1) || (language[i].value.indexOf("www.") > -1) && (languageType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:language>" + language[i].value + "</dc:language>" + '\n'; 
	}
	else if((language[i].value != "") && (languageType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:language>" + language[i].value + "</dc:language>" + '\n'; 
	}
	else if((language[i].value != "") && (languageType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:language xsi:type=\"ISO639-2\">" + language[i].value + "</dc:language>" + '\n'; 
	}
	else if((language[i].value != "") && (languageType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:language xsi:type=\"ISO639-3\">" + language[i].value + "</dc:language>" + '\n'; 
	}
	else if((language[i].value != "") && (languageType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:language xsi:type=\"RFC1766\">" + language[i].value + "</dc:language>" + '\n'; 
	}
	else if((language[i].value != "") && (languageType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:language xsi:type=\"RFC3066\">" + language[i].value + "</dc:language>" + '\n'; 
	}
}

	for(i=0; i<=identifier.length-1; i++) {
	if((identifier[i].value.indexOf("http://") > -1) || (identifier[i].value.indexOf("www.") > -1) && (identifierEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:identifier>" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:identifier>" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:identifier xsi:type=\"ISBN\">" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:identifier xsi:type=\"ISSN\">" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:identifier xsi:type=\"BookID\">" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:identifier xsi:type=\"URI\">" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:identifier xsi:type=\"URL\">" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:identifier xsi:type=\"DOI\">" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
}

	for(i=0; i<=coverage.length-1; i++) {
	if((coverage[i].value.indexOf("http://") > -1) || (coverage[i].value.indexOf("www.") > -1) && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage>" + coverage[i].value + "</dc:coverage>" + '\n'; 
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage>" + coverage[i].value + "</dc:coverage>" + '\n'; 
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"Period\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"TGN\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	}
	else if((coverage[i].value.indexOf("http://") > -1) || (coverage[i].value.indexOf("www.") > -1) && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage.spatial>" + coverage[i].value + "</dc:coverage.spatial>" + '\n'; 
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage.spatial>" + coverage[i].value + "</dc:coverage.spatial>" + '\n'; 
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:coverage.spatial xsi:type=\"TGN\">" + coverage[i].value + "</dc:coverage.spatial>" + '\n'; 
	}
	else if((coverage[i].value.indexOf("http://") > -1) || (coverage[i].value.indexOf("www.") > -1) && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage.temporal>" + coverage[i].value + "</dc:coverage.temporal>" + '\n'; 
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage.temporal>" + coverage[i].value + "</dc:coverage.temporal>" + '\n'; 
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:coverage.temporal xsi:type=\"Period\">" + coverage[i].value + "</dc:coverage.temporal>" + '\n'; 
	}
}

	for(i=0; i<=relation.length-1; i++) {
	if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation>" + relation[i].value + "</dc:relation>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation>" + relation[i].value + "</dc:relation>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:relation xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:relation xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:relation xsi:type=\"BookID\">" + relation[i].value + "</dc:relation>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:relation xsi:type=\"URI\">" + relation[i].value + "</dc:relation>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:relation xsi:type=\"URL\">" + relation[i].value + "</dc:relation>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:relation xsi:type=\"DOI\">" + relation[i].value + "</dc:relation>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.isVersionOf>" + relation[i].value + "</dc:relation.isVersionOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.isVersionOf>" + relation[i].value + "</dc:relation.isVersionOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:relation.isVersionOf xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.isVersionOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:relation.isVersionOf xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.isVersionOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:relation.isVersionOf xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.isVersionOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:relation.isVersionOf xsi:type=\"URI\">" + relation[i].value + "</dc:relation.isVersionOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:relation.isVersionOf xsi:type=\"URL\">" + relation[i].value + "</dc:relation.isVersionOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:relation.isVersionOf xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.isVersionOf>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.hasVersion>" + relation[i].value + "</dc:relation.hasVersion>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.hasVersion>" + relation[i].value + "</dc:relation.hasVersion>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:relation.hasVersion xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.hasVersion>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:relation.hasVersion xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.hasVersion>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:relation.hasVersion xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.hasVersion>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:relation.hasVersion xsi:type=\"URI\">" + relation[i].value + "</dc:relation.hasVersion>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:relation.hasVersion xsi:type=\"URL\">" + relation[i].value + "</dc:relation.hasVersion>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:relation.hasVersion xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.hasVersion>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.isReplacedBy>" + relation[i].value + "</dc:relation.isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.isReplacedBy>" + relation[i].value + "</dc:relation.isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:relation.isReplacedBy xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:relation.isReplacedBy xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:relation.isReplacedBy xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:relation.isReplacedBy xsi:type=\"URI\">" + relation[i].value + "</dc:relation.isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:relation.isReplacedBy xsi:type=\"URL\">" + relation[i].value + "</dc:relation.isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:relation.isReplacedBy xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.replaces>" + relation[i].value + "</dc:relation.replaces>" + '\n'; 
	}
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "0")){ 
  generatedXMLCode += "<dc:relation.replaces>" + relation[i].value + "</dc:relation.replaces>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "1")){ 
  generatedXMLCode += "<dc:relation.replaces xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.replaces>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "2")){ 
  generatedXMLCode += "<dc:relation.replaces xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.replaces>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "3")){ 
  generatedXMLCode += "<dc:relation.replaces xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.replaces>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "4")){ 
  generatedXMLCode += "<dc:relation.replaces xsi:type=\"URI\">" + relation[i].value + "</dc:relation.replaces>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "5")){ 
  generatedXMLCode += "<dc:relation.replaces xsi:type=\"URL\">" + relation[i].value + "</dc:relation.replaces>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "6")){ 
  generatedXMLCode += "<dc:relation.replaces xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.replaces>" + '\n'; 
  }
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isRequiredBy>" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
	}
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "0")){ 
  generatedXMLCode += "<dcterms:isRequiredBy>" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "1")){ 
  generatedXMLCode += "<dcterms:isRequiredBy xsi:type=\"ISBN\">" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "2")){ 
  generatedXMLCode += "<dcterms:isRequiredBy xsi:type=\"ISSN\">" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "3")){ 
  generatedXMLCode += "<dcterms:isRequiredBy xsi:type=\"BookID\">" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "4")){ 
  generatedXMLCode += "<dcterms:isRequiredBy xsi:type=\"URI\">" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "5")){ 
  generatedXMLCode += "<dcterms:isRequiredBy xsi:type=\"URL\">" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "6")){ 
  generatedXMLCode += "<dcterms:isRequiredBy xsi:type=\"DOI\">" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
  }
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.requires>" + relation[i].value + "</dc:relation.requires>" + '\n'; 
	}
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "0")){ 
  generatedXMLCode += "<dc:relation.requires>" + relation[i].value + "</dc:relation.requires>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "1")){ 
  generatedXMLCode += "<dc:relation.requires xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.requires>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "2")){ 
  generatedXMLCode += "<dc:relation.requires xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.requires>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "3")){ 
  generatedXMLCode += "<dc:relation.requires xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.requires>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "4")){ 
  generatedXMLCode += "<dc:relation.requires xsi:type=\"URI\">" + relation[i].value + "</dc:relation.requires>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "5")){ 
  generatedXMLCode += "<dc:relation.requires xsi:type=\"URL\">" + relation[i].value + "</dc:relation.requires>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "6")){ 
  generatedXMLCode += "<dc:relation.requires xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.requires>" + '\n'; 
  }
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.isPartOf>" + relation[i].value + "</dc:relation.isPartOf>" + '\n'; 
	}
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "0")){ 
  generatedXMLCode += "<dc:relation.isPartOf>" + relation[i].value + "</dc:relation.isPartOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "1")){ 
  generatedXMLCode += "<dc:relation.isPartOf xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.isPartOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "2")){ 
  generatedXMLCode += "<dc:relation.isPartOf xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.isPartOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "3")){ 
  generatedXMLCode += "<dc:relation.isPartOf xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.isPartOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "4")){ 
  generatedXMLCode += "<dc:relation.isPartOf xsi:type=\"URI\">" + relation[i].value + "</dc:relation.isPartOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "5")){ 
  generatedXMLCode += "<dc:relation.isPartOf xsi:type=\"URL\">" + relation[i].value + "</dc:relation.isPartOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "6")){ 
  generatedXMLCode += "<dc:relation.isPartOf xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.isPartOf>" + '\n'; 
  }
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.hasPart>" + relation[i].value + "</dc:relation.hasPart>" + '\n'; 
	}
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "0")){ 
  generatedXMLCode += "<dc:relation.hasPart>" + relation[i].value + "</dc:relation.hasPart>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "1")){ 
  generatedXMLCode += "<dc:relation.hasPart xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.hasPart>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "2")){ 
  generatedXMLCode += "<dc:relation.hasPart xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.hasPart>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "3")){ 
  generatedXMLCode += "<dc:relation.hasPart xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.hasPart>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "4")){ 
  generatedXMLCode += "<dc:relation.hasPart xsi:type=\"URI\">" + relation[i].value + "</dc:relation.hasPart>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "5")){ 
  generatedXMLCode += "<dc:relation.hasPart xsi:type=\"URL\">" + relation[i].value + "</dc:relation.hasPart>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "6")){ 
  generatedXMLCode += "<dc:relation.hasPart xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.hasPart>" + '\n'; 
  }
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.isReferencedBy>" + relation[i].value + "</dcterms:isReferencedBy>" + '\n'; 
	}
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "0")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy>" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "1")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "2")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "3")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "4")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"URI\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "5")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"URL\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "6")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.references>" + relation[i].value + "</dc:relation.references>" + '\n'; 
	}
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "0")){ 
  generatedXMLCode += "<dc:relation.references>" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "1")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "2")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "3")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "4")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"URI\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "5")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"URL\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "6")){ 
  generatedXMLCode += "<dc:relation.isReferencedBy xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.isReferencedBy>" + '\n'; 
  }
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.isFormatOf>" + relation[i].value + "</dcterms:isFormatOf>" + '\n'; 
	}
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "0")){ 
  generatedXMLCode += "<dc:relation.references>" + relation[i].value + "</dc:relation.isFormatOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "1")){ 
  generatedXMLCode += "<dc:relation.isFormatOf xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.isFormatOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "2")){ 
  generatedXMLCode += "<dc:relation.isFormatOf xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.isFormatOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "3")){ 
  generatedXMLCode += "<dc:relation.isFormatOf xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.isFormatOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "4")){ 
  generatedXMLCode += "<dc:relation.isFormatOf xsi:type=\"URI\">" + relation[i].value + "</dc:relation.isFormatOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "5")){ 
  generatedXMLCode += "<dc:relation.isFormatOf xsi:type=\"URL\">" + relation[i].value + "</dc:relation.isFormatOf>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "6")){ 
  generatedXMLCode += "<dc:relation.isFormatOf xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.isFormatOf>" + '\n'; 
  }
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation.hasFormat>" + relation[i].value + "</dc:relation.hasFormat>" + '\n'; 
	}
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "0")){ 
  generatedXMLCode += "<dc:relation.references>" + relation[i].value + "</dc:relation.hasFormat>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "1")){ 
  generatedXMLCode += "<dc:relation.hasFormat xsi:type=\"ISBN\">" + relation[i].value + "</dc:relation.hasFormat>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "2")){ 
  generatedXMLCode += "<dc:relation.hasFormat xsi:type=\"ISSN\">" + relation[i].value + "</dc:relation.hasFormat>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "3")){ 
  generatedXMLCode += "<dc:relation.hasFormat xsi:type=\"BookID\">" + relation[i].value + "</dc:relation.hasFormat>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "4")){ 
  generatedXMLCode += "<dc:relation.hasFormat xsi:type=\"URI\">" + relation[i].value + "</dc:relation.hasFormat>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "5")){ 
  generatedXMLCode += "<dc:relation.hasFormat xsi:type=\"URL\">" + relation[i].value + "</dc:relation.hasFormat>" + '\n'; 
  }
  else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "6")){ 
  generatedXMLCode += "<dc:relation.hasFormat xsi:type=\"DOI\">" + relation[i].value + "</dc:relation.hasFormat>" + '\n'; 
  }
}

	for(i=0; i<=rights.length-1; i++) {
	if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "0") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights>" + rights[i].value + "</dc:rights>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "0") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights>" + rights[i].value + "</dc:rights>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "0") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:rights xsi:type=\"URI\">" + rights[i].value + "</dc:rights>" + '\n'; 
	}
	else if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "1") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.accessRights>" + rights[i].value + "</dc:rights.accessRights>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "1") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.accessRights>" + rights[i].value + "</dc:rights.accessRights>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "1") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:rights.accessRights xsi:type=\"URI\">" + rights[i].value + "</dc:rights.accessRights>" + '\n'; 
	}
	else if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "2") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.copyrightExpiryDate>" + rights[i].value + "</dc:rights.copyrightExpiryDate>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "2") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.copyrightExpiryDate>" + rights[i].value + "</dc:rights.copyrightExpiryDate>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "2") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:rights.copyrightExpiryDate xsi:type=\"URI\">" + rights[i].value + "</dc:rights.copyrightExpiryDate>" + '\n'; 
	}
	else if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "3") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.copyrightOwner>" + rights[i].value + "</dc:rights.copyrightOwner>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "3") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.copyrightOwner>" + rights[i].value + "</dc:rights.copyrightOwner>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "3") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:rights.copyrightOwner xsi:type=\"URI\">" + rights[i].value + "</dc:rights.copyrightOwner>" + '\n'; 
	}
	else if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "4") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.createCentre>" + rights[i].value + "</dc:rights.createCentre>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "4") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.createCentre>" + rights[i].value + "</dc:rights.createCentre>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "4") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:rights.createCentre xsi:type=\"URI\">" + rights[i].value + "</dc:rights.createCentre>" + '\n'; 
	}
	else if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "5") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.location>" + rights[i].value + "</dc:rights.location>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "5") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.location>" + rights[i].value + "</dc:rights.location>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "5") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:rights.location xsi:type=\"URI\">" + rights[i].value + "</dc:rights.location>" + '\n'; 
	}
	else if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "6") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.securityClassification>" + rights[i].value + "</dc:rights.securityClassification>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "6") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights.securityClassification>" + rights[i].value + "</dc:rights.securityClassification>" + '\n'; 
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "6") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:rights.securityClassification xsi:type=\"URI\">" + rights[i].value + "</dc:rights.securityClassification>" + '\n'; 
	}
}

	for(i=0; i<=edition.length-1; i++) {
	if((edition[i].value.indexOf("http://") > -1) || (edition[i].value.indexOf("www.") > -1) && (editionType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:edition>" + edition[i].value + "</dc:edition>" + '\n'; 
	}
	else if((edition[i].value != "") && (editionType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:edition>" + edition[i].value + "</dc:edition>" + '\n'; 
	}
	else if((edition[i].value.indexOf("http://") > -1) || (edition[i].value.indexOf("www.") > -1) && (editionType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:edition.history>" + edition[i].value + "</dc:edition.history>" + '\n'; 
	}
	else if((edition[i].value != "") && (editionType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:edition.history>" + edition[i].value + "</dc:edition.history>" + '\n'; 
	}
}

	for(i=0; i<=marc.length-1; i++) {
	if((marc[i].value.indexOf("http://") > -1) || (marc[i].value.indexOf("www.") > -1) && (marcEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:marc>" + marc[i].value + "</dc:marc>" + '\n'; 
	}
	else if((marc[i].value != "") && (marcEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:marc>" + marc[i].value + "</dc:marc>" + '\n'; 
	}
	else if((marc[i].value.indexOf("http://") > -1) || (marc[i].value.indexOf("www.") > -1) && (marcEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:marc xsi:type=\"CNMARC\">" + marc[i].value + "</dc:marc>" + '\n'; 
	}
	else if((marc[i].value != "") && (marcEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:marc xsi:type=\"CNMARC\">" + marc[i].value + "</dc:marc>" + '\n'; 
	}
	else if((marc[i].value.indexOf("http://") > -1) || (marc[i].value.indexOf("www.") > -1) && (marcEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:marc xsi:type=\"MARC21\">" + marc[i].value + "</dc:marc>" + '\n'; 
	}
	else if((marc[i].value != "") && (marcEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:marc xsi:type=\"CNMARC21\">" + marc[i].value + "</dc:marc>" + '\n'; 
	}
}

	for(i=0; i<=degree.length-1; i++) {
	if((degree[i].value.indexOf("http://") > -1) || (degree[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:degree>" + degree[i].value + "</dc:degree>" + '\n'; 
	}
	else if(degree[i].value != ""){	
	generatedXMLCode += "<dc:degree>" + degree[i].value + "</dc:degree>" + '\n'; 
	}
}

	for(i=0; i<=degreegrantor.length-1; i++) {
	if((degreegrantor[i].value.indexOf("http://") > -1) || (degreegrantor[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:degree.grantor>" + degreegrantor[i].value + "</dc:degree.grantor>" + '\n'; 
	}
	else if(degreegrantor[i].value != ""){	
	generatedXMLCode += "<dc:degree.grantor>" + degreegrantor[i].value + "</dc:degree.grantor>" + '\n'; 
	}
}

	for(i=0; i<=degreediscipline.length-1; i++) {
	if((degreediscipline[i].value.indexOf("http://") > -1) || (degreediscipline[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:degree.discipline>" + degreediscipline[i].value + "</dc:degree.discipline>" + '\n'; 
	}
	else if(degreediscipline[i].value != ""){	
	generatedXMLCode += "<dc:degree.discipline>" + degreediscipline[i].value + "</dc:degree.discipline>" + '\n'; 
	}
}
	
	for(i=0; i<=degreelevel.length-1; i++) {
	if((degreelevel[i].value.indexOf("http://") > -1) || (degreelevel[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:degree.level>" + degreelevel[i].value + "</dc:degree.level>" + '\n'; 
	}
	else if(degreelevel[i].value != ""){	
	generatedXMLCode += "<dc:degree.level>" + degreelevel[i].value + "</dc:degree.level>" + '\n'; 
	}
}

generatedXMLCode += "<\/dublincore>";

$('#xmlresults').val(generatedXMLCode);

$('#generatebutton').blur();

}

function showHideOutput(){
	var value = $('#outputType').val();
	
	$('#xmlresults').show();
	$('#xmloptions').show();
}

function showHideCoverage(rowId,rowNum){
var blank = document.getElementById('blank' + rowNum);
var box = document.getElementById('box' + rowNum); 
var iso3166 = document.getElementById('iso3166' + rowNum);
var period = document.getElementById('period' + rowNum);
var point = document.getElementById('point' + rowNum);
var tgn = document.getElementById('tgn' + rowNum);
var w3ctdf = document.getElementById('w3ctdf' + rowNum);

var tbl = document.getElementById('coverageTable');
var select = document.getElementById('coverageEncoding' + rowNum);
var selected = document.getElementById(rowId).selectedIndex;

if(selected === "0"){
    while (select.hasChildNodes()){
    select.removeChild(select.firstChild);
    }  
  select.options[0] = new Option('', 'nocoverage');
  select.options[0].id = 'blank' + rowNum;
  select.options[1] = new Option('Box', 'box');
  select.options[1].id = 'box' + rowNum;
  select.options[2] = new Option('ISO3166', 'iso3166');
  select.options[2].id = 'iso3166' + rowNum;
  select.options[3] = new Option('Period', 'period');
  select.options[3].id = 'period' + rowNum;
  select.options[4] = new Option('Point', 'point');
  select.options[4].id = 'point' + rowNum;
  select.options[5] = new Option('TGN', 'tgn');
  select.options[5].id = 'tgn' + rowNum;
  select.options[6] = new Option('W3CTDF', 'w3ctdf');
  select.options[6].id = 'w3ctdf' + rowNum;
}
if(selected === "1"){
    while (select.hasChildNodes()){
    select.removeChild(select.firstChild);
    }  
  select.options[0] = new Option('', 'nocoverage');
  select.options[0].id = 'blank' + rowNum;
  select.options[1] = new Option('Box', 'box');
  select.options[1].id = 'box' + rowNum;
  select.options[2] = new Option('ISO3166', 'iso3166');
  select.options[2].id = 'iso3166' + rowNum;
  select.options[3] = new Option('Point', 'point');
  select.options[3].id = 'point' + rowNum;
  select.options[4] = new Option('TGN', 'tgn');
  select.options[4].id = 'tgn' + rowNum;
}
if(selected === "2"){
    while (select.hasChildNodes()){
    select.removeChild(select.firstChild);
    }  
  select.options[0] = new Option('', 'nocoverage');
  select.options[0].id = 'blank' + rowNum;
  select.options[1] = new Option('Period', 'period');
  select.options[1].id = 'period' + rowNum;
  select.options[2] = new Option('W3CTDF', 'w3ctdf');
  select.options[2].id = 'w3ctdf' + rowNum;
}
}
