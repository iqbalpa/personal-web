export const convDuration = (startDate: string, endDate: string): string => {
	// Parse input dates assuming DD/MM/YYYY format
	const startDateObj = new Date(startDate);
	const endDateObj = new Date(endDate);

	// Define month names array
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	// Format dates to MonthName-YYYY
	const formattedStartDate = `${monthNames[startDateObj.getMonth()]} ${startDateObj.getFullYear()}`;
	const formattedEndDate = `${monthNames[endDateObj.getMonth()]} ${endDateObj.getFullYear()}`;

	// Return formatted duration
	return `${formattedStartDate} - ${formattedEndDate}`;
};
