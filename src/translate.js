const translate = {
  english: {
    formTitle: 'Leave the comment',
    formName: 'Name',
    formMessage: 'Message',
    formSubmit: 'Send'
  },
  russian: {
    formTitle: 'Оставить комментарий',
    formName: 'Имя',
    formMessage: 'Сообщение',
    formSubmit: 'Отправить'
  }
};

export default function(lang) {
  if (lang === 'ru') {
    return translate.russian;
  } else return translate.english;
}
