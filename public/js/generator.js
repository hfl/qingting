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
	
	var date = [];
	date = $('input[name="dateRow"]');
	
	var dateType = [];
	dateType = $('select[name="dateType"]');
	
	var dateEncoding = [];
	dateEncoding = $('select[name="dateEncoding"]');
	
	var type = [];
	type = $('input[name="typeRow"]');
	
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
	
	var identifierType = [];
	identifierType = $('select[name="identifierType"]');
	
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
	
	var degree = [];
	degree = $('input[name="degreeRow"]');
	
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
generatedXMLCode += '\n' + "xmlns:dc=\"http://purl.org/dc/elements/1.1/\"";
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
	generatedXMLCode += "<dcterms:alternative>" + title[i].value + "</dcterms:alternative>" + '\n';
	}
	else if((title[i].value != "") && (titleType[i].selectedIndex == "1")){
	generatedXMLCode += "<dcterms:alternative>" + title[i].value + "</dcterms:alternative>" + '\n';
	}
}

	for(i=0; i<=creator.length-1; i++) {
	if((creator[i].value.indexOf("http://") > -1) || (creator[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:creator>" + creator[i].value + "</dc:creator>" + '\n'; 
	}
	else if(creator[i].value != ""){	
	generatedXMLCode += "<dc:creator>" + creator[i].value + "</dc:creator>" + '\n'; 
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
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:AAT\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:AGROVOC\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:DDC\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:ITIS\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:LCC\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:LCSH\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:MESH\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:NLM\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "9")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:TGM\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "10")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:TGN\">" + subject[i].value + "</dc:subject>" + '\n';          
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "11")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:UDC\">" + subject[i].value + "</dc:subject>" + '\n';          
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
	generatedXMLCode += "<dcterms:tableOfContents>" + description[i].value + "</dcterms:tableOfContents>" + '\n';          
	}
	else if((description[i].value.indexOf("http://") > -1) || (description[i].value.indexOf("www.") > -1) && (descriptionType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	}
	else if((description[i].value != "") && (descriptionType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:abstract>" + description[i].value + "</dcterms:abstract>" + '\n';          
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

	for(i=0; i<=contributor.length-1; i++) {
	if((contributor[i].value.indexOf("http://") > -1) || (contributor[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:contributor>" + contributor[i].value + "</dc:contributor>" + '\n'; 
	}
	else if(contributor[i].value != ""){	
	generatedXMLCode += "<dc:contributor>" + contributor[i].value + "</dc:contributor>" + '\n'; 
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
	generatedXMLCode += "<dcterms:created>" + date[i].value + "</dcterms:created>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:created>" + date[i].value + "</dcterms:created>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:valid>" + date[i].value + "</dcterms:valid>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:valid>" + date[i].value + "</dcterms:valid>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:available>" + date[i].value + "</dcterms:available>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:available>" + date[i].value + "</dcterms:available>" + '\n'; 
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:issued>" + date[i].value + "</dcterms:issued>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:issued>" + date[i].value + "</dcterms:issued>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:modified>" + date[i].value + "</dcterms:modified>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:modified>" + date[i].value + "</dcterms:modified>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:dateAccepted>" + date[i].value + "</dcterms:dateAccepted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:dateAccepted>" + date[i].value + "</dcterms:dateAccepted>" + '\n'; 
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dcterms:dateCopyrighted>" + date[i].value + "</dcterms:dateCopyrighted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dcterms:dateCopyrighted>" + date[i].value + "</dcterms:dateCopyrighted>" + '\n';          
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:dateSubmitted>" + date[i].value + "</dcterms:dateSubmitted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dcterms:dateSubmitted>" + date[i].value + "</dcterms:dateSubmitted>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date xsi:type=\"dcterms:Period\">" + date[i].value + "</dc:date>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:created xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:created>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:valid xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:valid>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:available xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:available>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:issued xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:issued>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:modified xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:modified>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:dateAccepted xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:dateAccepted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dcterms:dateCopyrighted xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:dateCopyrighted>" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dcterms:dateSubmitted xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:dateSubmitted>" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dc:date>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:created xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:created>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:valid xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:valid>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:available xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:available>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:issued xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:issued>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:modified xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:modified>" + '\n';          
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:dateAccepted xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:dateAccepted>" + '\n'; 
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dcterms:dateCopyrighted xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:dateCopyrighted>" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dcterms:dateSubmitted xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:dateSubmitted>" + '\n';
	}
}

	for(i=0; i<=type.length-1; i++) {
	if((type[i].value.indexOf("http://") > -1) || (type[i].value.indexOf("www.") > -1) && (typeType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:type>" + type[i].value + "</dc:type>" + '\n'; 
	}
	else if((type[i].value != "") && (typeType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:type>" + type[i].value + "</dc:type>" + '\n'; 
	}
	else if((type[i].value != "") && (typeType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:type xsi:type=\"dcterms:DCMIType\">" + type[i].value + "</dc:type>" + '\n';          
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
	generatedXMLCode += "<dcterms:extent>" + format[i].value + "</dcterms:extent>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:extent>" + format[i].value + "</dcterms:extent>" + '\n'; 
	}
	else if((format[i].value.indexOf("http://") > -1) || (format[i].value.indexOf("www.") > -1) && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:medium>" + format[i].value + "</dcterms:medium>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:medium>" + format[i].value + "</dcterms:medium>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "1") && (formatType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:format xsi:type=\"dcterms:IMT\">" + format[i].value + "</dc:format>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "1") && (formatType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:extent xsi:type=\"dcterms:IMT\">" + format[i].value + "</dcterms:extent>" + '\n'; 
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "1") && (formatType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:medium xsi:type=\"dcterms:IMT\">" + format[i].value + "</dcterms:medium>" + '\n'; 
	}
}

	for(i=0; i<=identifier.length-1; i++) {
	if((identifier[i].value.indexOf("http://") > -1) || (identifier[i].value.indexOf("www.") > -1) && (identifierEncoding[i].selectedIndex == "0") && (identifierType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:identifier>" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "0") && (identifierType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:identifier>" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value.indexOf("http://") > -1) || (identifier[i].value.indexOf("www.") > -1) && (identifierEncoding[i].selectedIndex == "0") && (identifierType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:bibliographicCitation>" + identifier[i].value + "</dcterms:bibliographicCitation>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "0") && (identifierType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:bibliographicCitation>" + identifier[i].value + "</dcterms:bibliographicCitation>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "1") && (identifierType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:identifier xsi:type=\"dcterms:URI\">" + identifier[i].value + "</dc:identifier>" + '\n'; 
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "1") && (identifierType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:bibliographicCitation xsi:type=\"dcterms:URI\">" + identifier[i].value + "</dcterms:bibliographicCitation>" + '\n'; 
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
	generatedXMLCode += "<dc:language xsi:type=\"dcterms:ISO639-2\">" + language[i].value + "</dc:language>" + '\n'; 
	}
	else if((language[i].value != "") && (languageType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:language xsi:type=\"dcterms:ISO639-3\">" + language[i].value + "</dc:language>" + '\n'; 
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
	generatedXMLCode += "<dc:relation xsi:type=\"dcterms:URI\">" + relation[i].value + "</dc:relation>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isVersionOf>" + relation[i].value + "</dcterms:isVersionOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isVersionOf>" + relation[i].value + "</dcterms:isVersionOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isVersionOf xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isVersionOf>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasVersion>" + relation[i].value + "</dcterms:hasVersion>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasVersion>" + relation[i].value + "</dcterms:hasVersion>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:hasVersion xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:hasVersion>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isReplacedBy>" + relation[i].value + "</dcterms:isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isReplacedBy>" + relation[i].value + "</dcterms:isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isReplacedBy xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isReplacedBy>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:replaces>" + relation[i].value + "</dcterms:replaces>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:replaces>" + relation[i].value + "</dcterms:replaces>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:replaces xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:replaces>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isRequiredBy>" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isRequiredBy>" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isRequiredBy xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:requires>" + relation[i].value + "</dcterms:requires>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:requires>" + relation[i].value + "</dcterms:requires>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:requires xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:requires>>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isPartOf>" + relation[i].value + "</dcterms:isPartOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isPartOf>" + relation[i].value + "</dcterms:isPartOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isPartOf xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isPartOf>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasPart>" + relation[i].value + "</dcterms:hasPart>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasPart>" + relation[i].value + "</dcterms:hasPart>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:hasPart xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:hasPart>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isReferencedBy>" + relation[i].value + "</dcterms:isReferencedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isReferencedBy>" + relation[i].value + "</dcterms:isReferencedBy>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isReferencedBy xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isReferencedBy>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:references>" + relation[i].value + "</dcterms:references>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:references>" + relation[i].value + "</dcterms:references>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:references xsi:type=\"dcterms:URI\">" + relation[i].value + "</dc:references>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isFormatOf>" + relation[i].value + "</dcterms:isFormatOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isFormatOf>" + relation[i].value + "</dcterms:isFormatOf>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isFormatOf xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isFormatOf>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasFormat>" + relation[i].value + "</dcterms:hasFormat>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasFormat>" + relation[i].value + "</dcterms:hasFormat>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:hasFormat xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:hasFormat>" + '\n'; 
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "13") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:conformsTo>" + relation[i].value + "</dcterms:conformsTo>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "13") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:conformsTo>" + relation[i].value + "</dcterms:conformsTo>" + '\n'; 
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "13") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:conformsTo xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:conformsTo>" + '\n'; 
	}
}

	for(i=0; i<=coverage.length-1; i++) {
	if((coverage[i].value.indexOf("http://") > -1) || (coverage[i].value.indexOf("www.") > -1) && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage>" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Coverage\" href=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Coverage\" href=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage>" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:Box\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Box\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Box\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:ISO3166\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"ISO3166\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"ISO3166\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:Period\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Period\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Period\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:Point\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Point\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Point\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:TGN\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"DCTERMS.TGN\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"DCTERMS.TGN\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:W3CTDF\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"DCTERMS.W3CTDF\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"DCTERMS.W3CTDF\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value.indexOf("http://") > -1) || (coverage[i].value.indexOf("www.") > -1) && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:spatial>" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Spatial\" href=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Spatial\" href=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:spatial>" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:spatial xsi:type=\"dcterms:Box\">" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.Box\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.Box\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:spatial xsi:type=\"dcterms:ISO3166\">" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.ISO3166\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.ISO3166\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:spatial xsi:type=\"dcterms:Point\">" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.Point\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.Point\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:spatial xsi:type=\"dcterms:TGN\">" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.TGN\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.TGN\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value.indexOf("http://") > -1) || (coverage[i].value.indexOf("www.") > -1) && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:temporal>" + coverage[i].value + "</dcterms:temporal>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Temporal\" href=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Temporal\" href=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:temporal>" + coverage[i].value + "</dcterms:temporal>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Temporal\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Temporal\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:temporal xsi:type=\"dcterms:Period\">" + coverage[i].value + "</dcterms:temporal>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Temporal\" scheme=\"DCTERMS.Period\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Temporal\" scheme=\"DCTERMS.Period\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:temporal xsi:type=\"dcterms:W3CTDF\">" + coverage[i].value + "</dcterms:temporal>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Temporal\" scheme=\"DCTERMS.W3CTDF\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Temporal\" scheme=\"DCTERMS.W3CTDF\" content=\"" + coverage[i].value + "\">" + '\n';
	}
}

	for(i=0; i<=rights.length-1; i++) {
	if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "0") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights>" + rights[i].value + "</dc:rights>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Rights\" href=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Rights\" href=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "0") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights>" + rights[i].value + "</dc:rights>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Rights\" content=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Rights\" content=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "0") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:rights xsi:type=\"dcterms:URI\">" + rights[i].value + "</dc:rights>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Rights\" href=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Rights\" href=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "1") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:license>" + rights[i].value + "</dcterms:license>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.License\" href=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.License\" href=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "1") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:license>" + rights[i].value + "</dcterms:license>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.License\" content=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.License\" content=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "1") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:license xsi:type=\"dcterms:URI\">" + rights[i].value + "</dcterms:license>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.License\" href=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.License\" href=\"" + rights[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=edition.length-1; i++) {
	if((edition[i].value.indexOf("http://") > -1) || (edition[i].value.indexOf("www.") > -1) && (editionType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:edition>" + edition[i].value + "</dcterms:edition>" + '\n'; 
	}
	else if((edition[i].value != "") && (editionType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:edition>" + edition[i].value + "</dcterms:edition>" + '\n'; 
	}
	else if((edition[i].value.indexOf("http://") > -1) || (edition[i].value.indexOf("www.") > -1) && (editionType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:educationlevel>" + edition[i].value + "</dcterms:educationlevel>" + '\n'; 
	}
	else if((edition[i].value != "") && (editionType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:educationlevel>" + edition[i].value + "</dcterms:educationlevel>" + '\n'; 
	}
	else if((edition[i].value.indexOf("http://") > -1) || (edition[i].value.indexOf("www.") > -1) && (editionType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:mediator>" + edition[i].value + "</dcterms:mediator>" + '\n'; 
	}
	else if((edition[i].value != "") && (editionType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:mediator>" + edition[i].value + "</dcterms:mediator>" + '\n'; 
	}
}

	for(i=0; i<=marc.length-1; i++) {
	if((marc[i].value.indexOf("http://") > -1) || (marc[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dcterms:marc>" + marc[i].value + "</dcterms:marc>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Marc\" href=\"" + marc[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Marc\" href=\"" + marc[i].value + "\" />" + '\n';
	}
	else if(marc[i].value != ""){	
	generatedXMLCode += "<dcterms:marc>" + marc[i].value + "</dcterms:marc>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Marc\" content=\"" + marc[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Marc\" content=\"" + marc[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=degree.length-1; i++) {
	if((degree[i].value.indexOf("http://") > -1) || (degree[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dcterms:degree>" + degree[i].value + "</dcterms:degree>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Degree\" href=\"" + degree[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Degree\" href=\"" + degree[i].value + "\" />" + '\n';
	}
	else if(degree[i].value != ""){	
	generatedXMLCode += "<dcterms:degree>" + degree[i].value + "</dcterms:degree>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Degree\" content=\"" + degree[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Degree\" content=\"" + degree[i].value + "\" />" + '\n';
	}
}

generatedXMLCode += '\n' + "<\/dublincore>";

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
