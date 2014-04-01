var coverageNum = 1;

function addRowToTable(type){	

if(type == "title"){	
    $("#titleTable").addRow({
    newRow: '<tr><td><select name="titleType" class="idleField"><option value="Titile">题名（Title）</option><option value="Alternative Title">交互题名（Alternative Title）</option></select></td><td><input type="text" name="titleRow" size="40" class="idleField" /></td></tr>'
    });
}
else if(type == "creator"){	
    $("#creatorTable").addRow({
    newRow: '<tr><td><input type="text" name="creatorRow" size="25" class="idleField" /></td><td><select name="creatorType" id="creatorType" class="idleField"><option></option><option>著</option><option>编</option><option>撰</option></select></td><td>机构<input type="text" name="institutionRow" size="15" class="idleField"  /></td><td>专业<input type="text" name="disciplineRow" size="15" class="idleField"  /></td></tr>'
    });
}
else if(type == "subject"){	
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" /></td><td><select name="subjectType" class="idleField"><option></option><option>汉语主题词表</option><option>中国分类主题词表</option><option>中国图书馆分类法</option><option>四库分类法（北大）</option><option>中国科学院图书馆分类法</option><option>美国国会图书馆主题词表</option><option>医学主题词表</option><option>杜威十进分类法</option><option>美国国会图书馆分类法</option><option>国际十进分类法</option></select></select></td></tr>'
	});
}
else if(type == "contributor"){	
    $("#contributorTable").addRow({
    newRow: '<tr><td><input type="text" name="contributorRow" size="25" class="idleField" /></td><td><select name="contributorType" id="contributorType" class="idleField"><option></option><option>著</option><option>编</option><option>撰</option></select></td><td>机构<input type="text" name="cinstitutionRow" size="15" class="idleField"  /></td><td>专业<input type="text" name="cdisciplineRow" size="15" class="idleField"  /></td></tr>'
    });
}
else if(type == "description"){	
	$("#descriptionTable").addRow({
	newRow: '<tr><td valign="top"><select name="descriptionType" class="idleField"><option value="description">资源描述（Description）</option><option value="abstract">摘要（Abstract）</option><option value="accrualPeriodicity">出版周期（Accrual Periodicity）</option><option value="tableOfContents">目录（Table of Contents）</option><option value="fund">资助（Fund）</option></select></td><td><textarea rows="5" cols="50" name="descriptionRow" class="idleField"></textarea></td></tr>'
	});
}
else if(type == "date"){	
	$("#dateTable").addRow({
	newRow: '<tr><td><select name="dateType" class="idleField"><option>日期（Date）</option><option>创建日期（Date Created）</option><option>有效日期（Date Valid）</option><option>可用日期（Date Available）</option><option>发布日期（Date Issued）</option><option>修改日期（Date Modified）</option><option>接受日期（Date Accepted）</option><option>版权日期（Date Copyrighted）</option><option>提交日期（Date Submitted）</option><option>答辩日期（Date Replied）</option></select></td><td><input type="text" name="dateRow" size="40" class="idleField" /></td><td><select name="dateEncoding" class="idleField"><option></option><option>Period</option><option>W3C-DTF</option></select></td></tr>'
	});
}
else if(type == "format"){	
	$("#formatTable").addRow({
	newRow: '<tr><td><select name="formatType" class="idleField"><option>资源形式（Format）</option><option>文件大小（Extent）</option><option>扫描分辨率（Scan Resolution）</option></select></td><td><input type="text" name="formatRow" size="40" class="idleField" /></td><td><select name="formatEncoding" class="idleField"><option></option><option>MIME</option></select></td></tr>'
	});
}
else if(type == "identifier"){	
	$("#identifierTable").addRow({
	newRow: '<tr><td><input type="text" name="identifierRow" size="50" class="idleField" /></td><td><select name="identifierEncoding" class="idleField"><option></option><option>国际标准书号（ISBN）</option><option>国际标准连续出版物号（ISSN）</option><option>电子书号（BookID）</option><option>统一资源标识符（URI）</option><option>统一资源定位符（URL）</option><option>数字对象标识符（DOI）</option></select></td></tr>'
	});
}
else if(type == "source"){	
	$("#sourceTable").addRow({
	newRow: '<tr><td><input type="text" name="sourceRow" size="40" class="idleField" /></td><td><select name="sourceType" class="idleField"><option></option><option>URI</option></select></td></tr>'
	});
}
else if(type == "language"){	
	$("#languageTable").addRow({
	newRow: '<tr><td><input type="text" name="languageRow" size="40" class="idleField"/></td><td><select name="languageType" class="idleField"><option></option><option>ISO 639-2</option><option>ISO 639-3</option><option>RFC 1766</option><option>RFC 3066</option></select></td></tr>'
	});
}
else if(type == "relation"){	
	$("#relationTable").addRow({
	newRow: '<tr><td><select name="relationType" class="idleField"><option>相关资源（Relation）</option><option>原版本（Is Version Of）</option><option>其他版本（Has Version）</option><option>被替代（Is Replaced By）</option><option>替代（Replaces）</option><option>被需求（Is Required By）</option><option>需求（Requires）</option><option>包含于（Is Part Of）</option><option>包含（Has Part）</option><option>被参照（Is Referenced By）</option><option>参照（References）</option><option>格式转换于（Is Format Of）</option><option>格式转换为（Has Format）</option></select></td><td><input type="text" name="relationRow" size="30" class="idleField" /></td><td><select name="relationEncoding" id="relationEncoding1" class="idleField"><option></option><option>国际标准书号（ISBN）</option><option>国际标准连续出版物号（ISSN）</option><option>电子书号（BookID）</option><option>统一资源标识符（URI）</option><option>统一资源定位符（URL）</option><option>数字对象标识符（DOI）</option></select></td></tr>'
	});
}
else if(type == "coverage"){
	coverageNum++;
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>时空范围（Coverage）</option><option>空间范围（Spatial）</option><option>时间范围（Temporal）</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" /></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option></option><option id="period'+coverageNum+'">Period</option><option id="tgn'+coverageNum+'">TGN</option></select></td></tr>'
	});
}
else if(type == "rights"){	
	$("#rightsTable").addRow({
	newRow: '<tr><td><select name="rightsType" class="idlefield"><option>权限（Rights）</option><option>访问权限（Access Rights）</option><option>版权解除日期（Copyright Expiry Date）</option><option>文本版权拥有者（Copyright Owner）</option><option>制作单位（Create Centre）</option><option>收藏单位（Location）</option><option>保密级别（Security Classification）</option></select></td><td><input type="text" name="rightsRow" size="40" class="idleField" /></td><td><select name="rightsEncoding" class="idleField"><option></option><option>URI</option></select></td></tr>'
	});
}
else if(type == "edition"){	
    $("#editionTable").addRow({
    newRow: '<tr><td><select name="editionType" class="idleField"><option value="Edition">版本信息（Edition）</option><option value="History">收藏历史（History）</option></select></td><td><input type="text" name="editionRow" size="40" class="idleField" /></td></tr>'
    });
}
else{
	$("#"+type+"Table").addRow({
	newRow: '<tr><td colspan="2"><input type="text" name='+type+'Row size="40" class="idleField"  /></td></tr>'
	});
}
}

function removeRowFromTable(tableID){
var rowCount = $("#"+tableID+" tr").length;
if(rowCount > 2){
$("#"+tableID+"").removeRow({});
}
}

var IMTclicked = 0;
var DCMIclicked = 0;
var boxclicked = 0;
var iso3166clicked = 0;
var iso639clicked = 0;
var perioddateclicked = 0;
var periodcoverageclicked = 0;
var pointclicked = 0;
var subjectclicked = 0;
var coverageclicked = 0;
//Hokey workaround -- basically a check to see if the user has already added a row with the lookup tool (used below)//

function addIMT(){
var IMTval = $('#IMTTypeFinder').val();
var countFormat = $('input[name*="formatRow"]').length;
var formatExists = $('#formatRow1').val();

if((countFormat == 1) && (formatExists == "") && (IMTclicked == 0)){
	$('#formatRow1').val(IMTval);
	$('#formatType1 option:eq(0)').prop('selected', true);
	$('#formatEncoding1 option:eq(1)').prop('selected', true);
	IMTclicked++;
}
else{
	$("#formatTable").addRow({
	newRow: '<tr><td><select name="formatType" class="idleField"><option selected="selected">Format</option><option>Extent</option><option>Medium</option></select></td><td><input type="text" name="formatRow" size="40" class="idleField" value='+IMTval+'></td><td><select name="formatEncoding" class="idleField"><option></option><option selected="selected">IMT</option></select></td></tr>'
	});
}
}

function addDCMI(){
var DCMIval = $('#DCMITypeFinder').val();
var countType = $('input[name*="typeRow"]').length;
var typeExists = $('#typeRow1').val();

if((countType == 1) && (typeExists == "") && (DCMIclicked == 0)){
	$('#typeRow1').val(DCMIval);
	$('#typeType1 option:eq(1)').prop('selected', true);
	DCMIclicked++;
}
else{
	alert('None exist, DCMI is '+DCMIclicked+' and count type is '+countType+' and type exists is '+typeExists+'.');
	$("#typeTable").addRow({
	newRow: '<tr><td><input type="text" name="typeRow" size="40" class="idleField" value="'+DCMIval+'"></td><td><select name="typeType" class="idleField"><option></option><option selected="selected">DCMI Type Vocabulary</option></select></td></tr>'
	});
}
}

function addDCMIBox(){
var boxVal = $('#BoxString').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists == "") && (boxclicked == 0)){
	$('#coverageType1 option:eq(1)').prop('selected', true)
	$('#coverageRow1').val(boxVal);
	$('#coverageEncoding1 option:eq(1)').prop('selected', true)
	boxclicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option selected="selected">Spatial</option><option>Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+boxVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'" selected="selected">Box</option><option id="iso3166'+coverageNum+'">ISO3166</option><option id="period'+coverageNum+'">Period</option><option id="point'+coverageNum+'">Point</option><option id="tgn'+coverageNum+'">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function addISO3166(){
var boxVal = $('#ISO3166Finder').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists == "") && (iso3166clicked == 0)){
	$('#coverageType1 option:eq(1)').prop('selected', true)
	$('#coverageRow1').val(boxVal);
	$('#coverageEncoding1 option:eq(2)').prop('selected', true)
	iso3166clicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option selected="selected">Spatial</option><option>Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+boxVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'">Box</option><option id="iso3166'+coverageNum+'" selected="selected">ISO3166</option><option id="period'+coverageNum+'">Period</option><option id="point'+coverageNum+'">Point</option><option id="tgn'+coverageNum+'">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function addDCMIPeriodDate(){
var periodVal = $('#PeriodString').val();
var countDate = $('input[name*="dateRow"]').length;
var dateExists = $('#dateRow1').val();

if((countDate == 1) && (dateExists == "") && (perioddateclicked == 0)){
	$('#dateType1 option:eq(0)').prop('selected', true)
	$('#dateRow1').val(periodVal);
	$('#dateEncoding1 option:eq(1)').prop('selected', true)
	perioddateclicked++;
}
else{
	$("#dateTable").addRow({
	newRow: '<tr><td><select name="dateType" class="idleField"><option selected="selected">Date</option><option>Date Created</option><option>Date Valid</option><option>Date Available</option><option>Date Issued</option><option>Date Modified</option><option>Date Accepted</option><option>Date Copyrighted</option><option>Date Submitted</option></select></td><td><input type="text" name="dateRow" size="40" class="idleField" value="'+periodVal+'" /></td><td><select name="dateEncoding" class="idleField"><option></option><option selected="selected">DCMI Period</option><option>W3C-DTF</option></select></td></tr>'
	});
}
}

function addDCMIPeriodCoverage(){
var periodVal = $('#PeriodString').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists == "") && (periodcoverageclicked == 0)){
	$('#coverageType1 option:eq(2)').prop('selected', true)
	$('#coverageRow1').val(periodVal);
	$('#coverageEncoding1 option:eq(3)').prop('selected', true)
	periodcoverageclicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option>Spatial</option><option selected="selected">Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+periodVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'">Box</option><option id="iso3166'+coverageNum+'">ISO3166</option><option id="period'+coverageNum+'" selected="selected">Period</option><option id="point'+coverageNum+'">Point</option><option id="tgn'+coverageNum+'">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function addISO6392(){
var languageVal = $('#ISO6392Finder').val();
var countLanguage = $('input[name*="languageRow"]').length;
var languageExists = $('#languageRow1').val();

if((countLanguage == 1) && (languageExists == "") && (iso639clicked == 0)){
	$('#languageRow1').val(languageVal);
	$('#languageType1 option:eq(1)').prop('selected', true)
	iso639clicked++;
}
else{
	$("#languageTable").addRow({
	newRow: '<tr><td><input type="text" name="languageRow" size="40" class="idleField" value="'+languageVal+'"/></td><td><select name="languageType" class="idleField"><option></option><option selected="selected">ISO 639-2</option><option>ISO 639-3</option><option>RFC1766</option><option>RFC3066</option><option>RFC4646</option><option>RFC5646</option></select></td></tr>'
	});
}
}

function addISO6393(){
var languageVal = $('#ISO6393Finder').val();
var countLanguage = $('input[name*="languageRow"]').length;
var languageExists = $('#languageRow1').val();

if((countLanguage == 1) && (languageExists == "") && (iso639clicked == 0)){
	$('#languageRow1').val(languageVal);
	$('#languageType1 option:eq(2)').prop('selected', true)
	iso639clicked++;
}
else{
	$("#languageTable").addRow({
	newRow: '<tr><td><input type="text" name="languageRow" size="40" class="idleField" value="'+languageVal+'"/></td><td><select name="languageType" class="idleField"><option></option><option>ISO 639-2</option><option selected="selected">ISO 639-3</option><option>RFC1766</option><option>RFC3066</option><option>RFC4646</option><option>RFC5646</option></select></td></tr>'
	});
}
}

function addDCMIPoint(){
var pointVal = $('#PointString').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists == "") && (pointclicked == 0)){
	$('#coverageType1 option:eq(1)').prop('selected', true)
	$('#coverageRow1').val(pointVal);
	$('#coverageEncoding1 option:eq(4)').prop('selected', true)
	pointclicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option selected="selected">Spatial</option><option>Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+pointVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'">Box</option><option id="iso3166'+coverageNum+'">ISO3166</option><option id="period'+coverageNum+'">Period</option><option id="point'+coverageNum+'" selected="selected">Point</option><option id="tgn'+coverageNum+'">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function addAGROVOC(){
var agrovocVal = $('#AGROVOCfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(agrovocVal);
	$('#subjectType1 option:eq(2)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+agrovocVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option selected="selected">AGROVOC</option><option>DDC</option><option>ITIS</option><option>LCC</option><option>LCSH</option><option>MESH</option><option>NLM</option><option>TGM</option><option>TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addITIS(){
var itisVal = $('#ITISfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(itisVal);
	$('#subjectType1 option:eq(4)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+itisVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option>AGROVOC</option><option>DDC</option><option selected="selected">ITIS</option><option>LCC</option><option>LCSH</option><option>MESH</option><option>NLM</option><option>TGM</option><option>TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addLCSH(){
var lcshVal = $('#LCSHfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(lcshVal);
	$('#subjectType1 option:eq(6)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+lcshVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option>AGROVOC</option><option>DDC</option><option>ITIS</option><option>LCC</option><option selected="selected">LCSH</option><option>MESH</option><option>NLM</option><option>TGM</option><option>TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addMESH(){
var meshVal = $('#MESHfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(meshVal);
	$('#subjectType1 option:eq(7)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+meshVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option>AGROVOC</option><option>DDC</option><option>ITIS</option><option>LCC</option><option>LCSH</option><option selected="selected">MESH</option><option>NLM</option><option>TGM</option><option>TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addTGNSubject(){
var tgnVal = $('#TGNfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(tgnVal);
	$('#subjectType1 option:eq(10)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+tgnVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option>AGROVOC</option><option>DDC</option><option>ITIS</option><option>LCC</option><option>LCSH</option><option>MESH</option><option>NLM</option><option>TGM</option><option selected="selected">TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addTGNCoverage(){
var tgnVal = $('#TGNfinder').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists == "") && (coverageclicked == 0)){
	$('#coverageType1 option:eq(1)').prop('selected', true)
	$('#coverageRow1').val(tgnVal);
	$('#coverageEncoding1 option:eq(5)').prop('selected', true)
	coverageclicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option selected="selected">Spatial</option><option>Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+tgnVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'">Box</option><option id="iso3166'+coverageNum+'">ISO3166</option><option id="period'+coverageNum+'">Period</option><option id="point'+coverageNum+'">Point</option><option id="tgn'+coverageNum+'" selected="selected">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function buildDCMIPeriod(){
var periodName = $("#PeriodName").val();
var periodStart = $("#PeriodStart").val();
var periodEnd = $("#PeriodEnd").val();
var periodScheme = $("#PeriodScheme").val();

$("#PeriodString").val( function() {

var string = "";

if(periodName != ""){
string += "name="+periodName+";";
}

if(periodStart != ""){
string +=  "start="+periodStart+";";
}

if(periodEnd != ""){
string +=  "end="+periodEnd+";";
}

if(periodScheme != ""){
string +=  "scheme="+periodScheme+";";
}
return string;
});
}

function buildDCMIPoint(){
var pointName = $("#PointName").val();
var pointEast = $("#PointEast").val();
var pointNorth = $("#PointNorth").val();
var pointElevation = $("#PointElev").val();
var point2D = $("#Point2DUnits").val();
var point3D = $("#Point3DUnits").val();
var pointMap = $("#PointMap").val();

$("#PointString").val( function() {

var string = "";

if(pointName != ""){
string += "name="+pointName+";";
}

if(pointEast != ""){
string +=  "eastlimit="+pointEast+";";
}

if(pointNorth != ""){
string +=  "northlimit="+pointNorth+";";
}

if(pointElevation != ""){
string +=  "elevation="+pointElevation+";";
}

if(point2D != ""){
string +=  "units="+point2D+";";
}

if(point3D != ""){
string +=  "zunits="+point3D+";";
}

if(pointMap != ""){
string +=  "projection="+pointMap+";";
}
return string;
});
}

function buildDCMIPeriod(){
var periodName = $("#PeriodName").val();
var periodStart = $("#PeriodStart").val();
var periodEnd = $("#PeriodEnd").val();
var periodScheme = $("#PeriodScheme").val();

$("#PeriodString").val( function() {

var string = "";

if(periodName != ""){
string += "name="+periodName+";";
}

if(periodStart != ""){
string +=  "start="+periodStart+";";
}

if(periodEnd != ""){
string +=  "end="+periodEnd+";";
}

if(periodScheme != ""){
string +=  "scheme="+periodScheme+";";
}
return string;
});
}

function buildDCMIBox(){
var boxName = $("#BoxName").val();
var boxNorth = $("#BoxNorth").val();
var boxEast = $("#BoxEast").val();
var boxSouth = $("#BoxSouth").val();
var boxWest = $("#BoxWest").val();
var boxUpper = $("#BoxUpper").val();
var boxLower = $("#BoxLower").val();
var box2D = $("#Box2DUnits").val();
var box3D = $("#Box3DUnits").val();
var boxMap = $("#BoxMap").val();

$("#BoxString").val( function() {

var string = "";

if(boxName != ""){
string += "name="+boxName+";";
}

if(boxNorth != ""){
string +=  "northlimit="+boxNorth+";";
}

if(boxEast != ""){
string +=  "eastlimit="+boxEast+";";
}

if(boxSouth != ""){
string +=  "southlimit="+boxSouth+";";
}

if(boxWest != ""){
string += "westlimit="+boxWest+";";
}

if(boxUpper != ""){
string +=  "uplimit="+boxUpper+";";
}

if(boxLower != ""){
string +=  "downlimit="+boxLower+";";
}

if(box2D != ""){
string +=  "units="+box2D+";";
}

if(box3D != ""){
string +=  "zunits="+box3D+";";
}

if(boxMap != ""){
string +=  "projection="+boxMap+";";
}
return string;
});
}

function buildW3CDTF(){
var w3Hours = $("#BoxName").val();
var boxNorth = $("#BoxNorth").val();
var boxEast = $("#BoxEast").val();
var boxSouth = $("#BoxSouth").val();
var boxWest = $("#BoxWest").val();
var boxUpper = $("#BoxUpper").val();
var boxLower = $("#BoxLower").val();
var box2D = $("#Box2DUnits").val();
var box3D = $("#Box3DUnits").val();
var boxMap = $("#BoxMap").val();

$("#BoxString").val( function() {

var string = "";

if(boxName != ""){
string += "name="+boxName+";";
}

if(boxNorth != ""){
string +=  "northlimit="+boxNorth+";";
}

if(boxEast != ""){
string +=  "eastlimit="+boxEast+";";
}

if(boxSouth != ""){
string +=  "southlimit="+boxSouth+";";
}

if(boxWest != ""){
string += "westlimit="+boxWest+";";
}

if(boxUpper != ""){
string +=  "uplimit="+boxUpper+";";
}

if(boxLower != ""){
string +=  "downlimit="+boxLower+";";
}

if(box2D != ""){
string +=  "units="+box2D+";";
}

if(box3D != ""){
string +=  "zunits="+box3D+";";
}

if(boxMap != ""){
string +=  "projection="+boxMap+";";
}
return string;
});
}
