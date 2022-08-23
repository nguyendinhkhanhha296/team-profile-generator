const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "nguyendinhkhanhha296";
    const employeeInstance = new Engineer("Ha", 2, "ndkh296@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "nguyendinhkhanhha296";
    const employeeInstance = new Engineer("Ha", 2, "ndkh296@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Ha", 2, "ndkh296@gmail.com", "nguyendinhkhanhha296");
    expect(employeeInstance.getRole()).toBe(returnValue);
});