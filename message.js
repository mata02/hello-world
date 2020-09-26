function updateUnreadMessageCnt() {
    if (!window.navigator.onLine) {
        return
    }
    $.when(getUnreadMessageCnt()).done(function (returnAjax) {
        if (returnAjax.code === '0') {
            if (returnAjax.result > 0) {
                $('#unreadMsgCnt')[0].innerHTML = returnAjax.result
            } else {
                $('#unreadMsgCnt')[0].innerHTML = ''
            }
        } else {
            showAlert('E', returnAjax.message)
        }
    })
}

function getUnreadMessageCnt() {
    return $.ajax({
        type: 'POST',
        timeout: 4000,
        url: '/ysap/messages/getUnreadMsgCnt',
        headers: {
            'X-CSRF-Token': $('form').find('input[name=_csrfToken]').val()
        },
        data: {},
        dataType: 'json'
    }).fail(function (xhr, textStatus, errorThrown) {
        if (textStatus !== 'timeout') {
            ajaxFail(xhr, 'E', i18next.t('message.C00020'))
        }
    })
}
