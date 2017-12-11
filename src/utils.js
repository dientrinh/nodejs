
/*
 Function to get current date time by format yyyy-mm-dd HH:MM:ss
 */
module.exports.getNumber = function() {
	return 5;
};
/*
 Function to checksum barcode
 */
checkSumBarcode = function(current_barcode) {
	if (current_barcode.replace(/ /g, '').length !== 12
			|| isNaN(current_barcode)) {
		return -1;
	}
	var total = 0;
	for (var i = 0; i < 12; i++) {
		if (i % 2 === 0) {
			total += parseInt(current_barcode.charAt(i));
		} else {
			total += parseInt(current_barcode.charAt(i)) * 3;
		}
	}
	if (total === 0) {
		return 0;
	}
	return 10 - total % 10;
}
module.exports.checkSumBarcode = checkSumBarcode;