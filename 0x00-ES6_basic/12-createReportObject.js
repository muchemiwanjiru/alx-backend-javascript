export default function createReportObject(employeesList) {
  const employeeReportObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return employeeReportObject;
}
