import { message, modal, notification } from '../shared/EscapeAntd'

function request(url: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(resolve)
      .catch(err => {
        message.error(err.message);
        notification.error({
          message: '错误',
        });
        modal.error({
          title: '错误',
          content: err.message,
        });
        reject(err)
      })
  })
}

export default request;