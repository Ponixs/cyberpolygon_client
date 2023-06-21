export const SERVER_PATHS = {
    refresh: '/refresh',                        // get
    login: '/login',                            // post
    register: '/registration',                  // post
    /* TASKS */
    postTask: '/tasks',
    putTask: '/tasks',
    getTask: (id) => '/tasks/' + id,
    getTasks: (category, page) => '/tasks?category=' + category + '&page=' + page,
    checkTaskFlag: (id) => '/tasks/' + id,      // post
    deleteTask: (id) => '/tasks/' + id,
    downloadTask: (fileName) => 'cyberpolygon-files/tasks/' + fileName,  // (download file with task)
    getTaskAnswer: (id) => '/answer-task/' + id,
    /* USERS */
    getUsers: (page) => '/users?page=' + page,
    getNotActivatedUsers: (page) => '/not-users?page=' + page,
    getNewUsers: (page) => '/new-users?page=' + page,
    getScoreboard: (category, page) => '/scoreboard?category=' + category + '&page=' + page,
    downloadStudentCard: (id) => '/cyberpolygon-files/students/' + id,
    acceptAddCategoryToUser: (id, category) => '/user/' + id + '?category=' + category, // put
    rejectAddCategoryToUser: (id, category) => '/user/' + id + '?category=' + category, // delete
    putUser: '/user',                           // path by which the user changes his own data
    deleteUser: (id) => '/users/' + id,
    giveRole: '/give-role',                     // put
    deleteCategory: '/user-category/',          // deletee [+ id]
    logout: '/logout',                          // delete
    activation: '/activation',                  // put | delete
}