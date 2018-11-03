const translate = {
  english: {
    formTitle: 'Leave the comment',
    formName: 'Name',
    formMessage: 'Message',
    formSubmit: 'Send',

    remove: 'remove',
    close: 'close',
    open: 'open',

    comments: 'Comments',
    firstComment: 'Be the first to Comment.',
    article: 'Article',
    date: 'creation date'
  },
  russian: {
    formTitle: 'Оставить комментарий',
    formName: 'Имя',
    formMessage: 'Сообщение',
    formSubmit: 'Отправить',

    remove: 'удалить',
    close: 'закрыть',
    open: 'открыть',

    comments: 'Комменты',
    firstComment: 'Прокомментируй эту статью первый.',
    article: 'Статью',
    date: 'дата создания'
  }
};

export default function(lang) {
  if (lang === 'ru') {
    return translate.russian;
  } else return translate.english;
}
