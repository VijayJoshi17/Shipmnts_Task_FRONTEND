const data = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
      role: "Engineer",
      hireDate: "2022-01-15",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 5,
      lastLogin: "2024-07-28T14:48:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 34,
      role: "Manager",
      hireDate: "2020-06-30",
      isActive: false,
      salary: 95000,
      department: "Operations",
      projectsCompleted: 10,
      lastLogin: "2024-07-30T09:21:00.000Z",
      accessLevel: "User"
    },
    {
      id: 3,
      name: "Charlie Rose",
      age: 22,
      role: "Intern",
      hireDate: "2023-03-01",
      isActive: true,
      salary: 45000,
      department: "Development",
      projectsCompleted: 1,
      lastLogin: "2024-07-29T17:03:00.000Z",
      accessLevel: "User"
    },
    {
      id: 4,
      name: "David Green",
      age: 40,
      role: "Director",
      hireDate: "2018-11-20",
      isActive: true,
      salary: 120000,
      department: "Management",
      projectsCompleted: 20,
      lastLogin: "2024-07-27T12:35:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 5,
      name: "Eva White",
      age: 30,
      role: "Designer",
      hireDate: "2021-05-15",
      isActive: true,
      salary: 70000,
      department: "Design",
      projectsCompleted: 8,
      lastLogin: "2024-07-31T10:15:00.000Z",
      accessLevel: "User"
    },
    {
      id: 6,
      name: "Frank Black",
      age: 29,
      role: "Engineer",
      hireDate: "2019-09-17",
      isActive: true,
      salary: 80000,
      department: "Development",
      projectsCompleted: 6,
      lastLogin: "2024-07-25T11:45:00.000Z",
      accessLevel: "User"
    },
    {
      id: 7,
      name: "Grace Brown",
      age: 26,
      role: "Engineer",
      hireDate: "2021-04-10",
      isActive: false,
      salary: 78000,
      department: "Development",
      projectsCompleted: 4,
      lastLogin: "2024-07-20T09:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 8,
      name: "Hank Green",
      age: 45,
      role: "Senior Manager",
      hireDate: "2017-03-25",
      isActive: true,
      salary: 110000,
      department: "Operations",
      projectsCompleted: 15,
      lastLogin: "2024-07-29T13:22:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 9,
      name: "Ivy Blue",
      age: 31,
      role: "Designer",
      hireDate: "2019-08-05",
      isActive: true,
      salary: 72000,
      department: "Design",
      projectsCompleted: 7,
      lastLogin: "2024-07-28T08:48:00.000Z",
      accessLevel: "User"
    },
    {
      id: 10,
      name: "Jack White",
      age: 37,
      role: "Product Manager",
      hireDate: "2020-02-20",
      isActive: false,
      salary: 95000,
      department: "Product",
      projectsCompleted: 12,
      lastLogin: "2024-07-26T15:18:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 11,
      name: "Kara Black",
      age: 33,
      role: "Engineer",
      hireDate: "2018-12-12",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 9,
      lastLogin: "2024-07-29T12:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 12,
      name: "Leo Green",
      age: 27,
      role: "Designer",
      hireDate: "2021-01-30",
      isActive: true,
      salary: 68000,
      department: "Design",
      projectsCompleted: 3,
      lastLogin: "2024-07-28T16:15:00.000Z",
      accessLevel: "User"
    },
    {
      id: 13,
      name: "Mona Blue",
      age: 36,
      role: "Engineer",
      hireDate: "2019-11-18",
      isActive: true,
      salary: 87000,
      department: "Development",
      projectsCompleted: 11,
      lastLogin: "2024-07-30T14:50:00.000Z",
      accessLevel: "User"
    },
    {
      id: 14,
      name: "Nina Brown",
      age: 25,
      role: "Intern",
      hireDate: "2023-04-14",
      isActive: true,
      salary: 42000,
      department: "Development",
      projectsCompleted: 2,
      lastLogin: "2024-07-31T11:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 15,
      name: "Oscar White",
      age: 42,
      role: "Director",
      hireDate: "2016-05-11",
      isActive: true,
      salary: 125000,
      department: "Management",
      projectsCompleted: 22,
      lastLogin: "2024-07-29T09:33:00.000Z",
      accessLevel: "Admin"
    }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('tableBody');
    const searchInput = document.getElementById('search');
    const roleFilter = document.getElementById('roleFilter');
    const isActiveFilter = document.getElementById('isActiveFilter');
    const integerFilterSelect = document.getElementById('integerFilterSelect');
    const integerFilterValue1 = document.getElementById('integerFilterValue1');
    const integerFilterValue2 = document.getElementById('integerFilterValue2');
    const stringFilterSelect = document.getElementById('stringFilterSelect');
    const stringFilterValue = document.getElementById('stringFilterValue');
    const dateFilterSelect = document.getElementById('dateFilterSelect');
    const dateFilterValue1 = document.getElementById('dateFilterValue1');
    const dateFilterValue2 = document.getElementById('dateFilterValue2');
    const booleanFilterSelect = document.getElementById('booleanFilterSelect');

    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.role}</td>
                <td>${item.hireDate}</td>
                <td>${item.isActive}</td>
                <td>${item.salary}</td>
                <td>${item.department}</td>
                <td>${item.projectsCompleted}</td>
                <td>${item.lastLogin}</td>
                <td>${item.accessLevel}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    function filterData() {
        let filteredData = data;
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredData = filteredData.filter(item =>
                Object.values(item).some(val =>
                    String(val).toLowerCase().includes(searchTerm)
                )
            );
        }

        const roleValue = roleFilter.value;
        if (roleValue) {
            filteredData = filteredData.filter(item => item.role === roleValue);
        }

        const isActiveValue = isActiveFilter.value;
        if (isActiveValue) {
            filteredData = filteredData.filter(item => String(item.isActive) === isActiveValue);
        }

        const integerFilterType = integerFilterSelect.value;
        const intValue1 = parseInt(integerFilterValue1.value, 10);
        const intValue2 = parseInt(integerFilterValue2.value, 10);

        if (integerFilterType) {
            filteredData = filteredData.filter(item => {
                switch (integerFilterType) {
                    case 'equals':
                        return item.age === intValue1;
                    case 'lessThan':
                        return item.age < intValue1;
                    case 'lessThanOrEqual':
                        return item.age <= intValue1;
                    case 'greaterThan':
                        return item.age > intValue1;
                    case 'greaterThanOrEqual':
                        return item.age >= intValue1;
                    case 'range':
                        return item.age >= intValue1 && item.age <= intValue2;
                    case 'notEqual':
                        return item.age !== intValue1;
                    default:
                        return true;
                }
            });
        }

        const stringFilterType = stringFilterSelect.value;
        const stringValue = stringFilterValue.value.toLowerCase();

        if (stringFilterType) {
            filteredData = filteredData.filter(item => {
                const stringValueInItem = item.name.toLowerCase();
                switch (stringFilterType) {
                    case 'contains':
                        return stringValueInItem.includes(stringValue);
                    case 'notContains':
                        return !stringValueInItem.includes(stringValue);
                    case 'equals':
                        return stringValueInItem === stringValue;
                    case 'notEqual':
                        return stringValueInItem !== stringValue;
                    case 'startsWith':
                        return stringValueInItem.startsWith(stringValue);
                    case 'endsWith':
                        return stringValueInItem.endsWith(stringValue);
                    case 'isNull':
                        return item.name === null || item.name === '';
                    case 'isNotNull':
                        return item.name !== null && item.name !== '';
                    default:
                        return true;
                }
            });
        }

        const dateFilterType = dateFilterSelect.value;
        const dateValue1 = new Date(dateFilterValue1.value);
        const dateValue2 = new Date(dateFilterValue2.value);

        if (dateFilterType) {
            filteredData = filteredData.filter(item => {
                const itemDate = new Date(item.hireDate);
                switch (dateFilterType) {
                    case 'dateIs':
                        return itemDate.toDateString() === dateValue1.toDateString();
                    case 'dateRange':
                        return itemDate >= dateValue1 && itemDate <= dateValue2;
                    case 'equals':
                        return itemDate.toDateString() === dateValue1.toDateString();
                    case 'lessThan':
                        return itemDate < dateValue1;
                    case 'lessThanOrEqual':
                        return itemDate <= dateValue1;
                    case 'greaterThan':
                        return itemDate > dateValue1;
                    case 'greaterThanOrEqual':
                        return itemDate >= dateValue1;
                    case 'notEqual':
                        return itemDate.toDateString() !== dateValue1.toDateString();
                    case 'isNull':
                        return item.hireDate === null || item.hireDate === '';
                    case 'isNotNull':
                        return item.hireDate !== null && item.hireDate !== '';
                    default:
                        return true;
                }
            });
        }

        const booleanFilterType = booleanFilterSelect.value;

        if (booleanFilterType) {
            filteredData = filteredData.filter(item => {
                switch (booleanFilterType) {
                    case 'isNull':
                        return item.isActive === null;
                    case 'isNotNull':
                        return item.isActive !== null;
                    case 'equals':
                        return String(item.isActive) === 'true';
                    default:
                        return true;
                }
            });
        }

        renderTable(filteredData);
    }

    function sortTable(columnIndex) {
        const rows = Array.from(tableBody.querySelectorAll('tr'));
        const isAscending = tableBody.getAttribute('data-sort-order') === 'asc';

        rows.sort((rowA, rowB) => {
            const cellA = rowA.children[columnIndex].textContent;
            const cellB = rowB.children[columnIndex].textContent;

            if (columnIndex === 2 || columnIndex === 6 || columnIndex === 8) { // Integer columns
                return isAscending
                    ? parseFloat(cellA) - parseFloat(cellB)
                    : parseFloat(cellB) - parseFloat(cellA);
            } else if (columnIndex === 4 || columnIndex === 9) { // Date columns
                return isAscending
                    ? new Date(cellA) - new Date(cellB)
                    : new Date(cellB) - new Date(cellA);
            } else { // String columns
                return isAscending
                    ? cellA.localeCompare(cellB)
                    : cellB.localeCompare(cellA);
            }
        });

        tableBody.innerHTML = '';
        rows.forEach(row => tableBody.appendChild(row));
        tableBody.setAttribute('data-sort-order', isAscending ? 'desc' : 'asc');
    }

    searchInput.addEventListener('input', filterData);
    roleFilter.addEventListener('change', filterData);
    isActiveFilter.addEventListener('change', filterData);
    integerFilterSelect.addEventListener('change', filterData);
    integerFilterValue1.addEventListener('input', filterData);
    integerFilterValue2.addEventListener('input', filterData);
    stringFilterSelect.addEventListener('change', filterData);
    stringFilterValue.addEventListener('input', filterData);
    dateFilterSelect.addEventListener('change', filterData);
    dateFilterValue1.addEventListener('input', filterData);
    dateFilterValue2.addEventListener('input', filterData);
    booleanFilterSelect.addEventListener('change', filterData);

    renderTable(data);
});