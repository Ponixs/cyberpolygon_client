export const SERVER_PATHS = {
    refresh: '/refresh',                        // get
    login: '/login',                            // post
    register: '/registration',                  // post
    tasks: '/tasks',                            // post | put | get (one) [+ '/' + id] | delete [+ '/' + id] | post (for checking flag) [+ '/' + id]
    getTasks: '/tasks?category=',               // get (all) [+ category]
    downloadTask: 'cyberpolygon-files/tasks/',  // download file with task [+ fileName]
    answer: '/answer-task/',                    // get [+ id]
    user: '/user',                              // put (add user to category) [+ '/' + id] | put (update user) | delete (reject category) [+ '/' + id]
    users: '/users',                            // get ?page? | delete (delete user) [+ '/' + id] 
    notActivatedUsers: '/not-users',            // get ?page?
    newUsers: '/new-users',                     // get ?page?
    scoreboard: '/scoreboard?category=',        // get [+ category]
    studentCard: '/cyberpolygon-files/students/',// get [?]
    giveRole: '/give-role',                     // put
    deleteCategory: '/user-category/',          // deletee [+ id]
    logout: '/logout',                          // delete
    activation: '/activation',                  // put | delete
}

// 5, 8, 11, 14