/*
    Kaguya - The opensource instant messaging framework.
    ---
    Copyright 2021 Star Inc.(https://starinc.xyz)

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import Transport from "./transport.mjs";

export default class extends Transport {
    constructor(apiHost, responseSalt) {
        super(apiHost, responseSalt);
    }

    getHistoryMessages(timestamp, count) {
        this.request('GetHistoryMessages', {timestamp, count});
    }

    getMessage(uuid) {
        this.request('GetMessage', uuid);
    }

    sendTextMessage(content) {
        const data = {contentType: 0, content};
        this.request('SendMessage', data);
    }
}
