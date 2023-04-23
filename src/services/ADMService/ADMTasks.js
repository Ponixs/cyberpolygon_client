import api from "../../http/api"

export class ADMTasks {
  static async addTask(taskInfo) {
      api.post('/tasks',taskInfo ).then(response => {
        console.log(response)
        // сделать так чтобы отображалось сообщение об успешном добавлении
        // это может быть попап (не рекомендуемо)   https://habr.com/ru/articles/417873/
        // либо снекбар (было бы идеально)          https://html5css.ru/howto/howto_js_snackbar.php
      }).catch(err => {
        console.log(err)
        // аналогично с тем что выше, но желательно сделать более заметно чем снекбар
        // как - полет вашей фантазии
        // когда сдлеаешь - консоль логи надо убрать. в проде они нам не нужны
      })
  }

  static async changeTask(taskInfo) {
    console.log()
  }

  static async delTask(taskId) {
    console.log()
  }
}
