/*
    Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { IonicModule } from "@ionic/angular";
import { HMSMLText } from "@hmscore/ionic-native-hms-mltext/ngx";
import { FormrecognitionPageRoutingModule } from "./formrecognition-routing.module";

import { FormrecognitionPage } from "./formrecognition.page";

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, FormrecognitionPageRoutingModule],
    declarations: [FormrecognitionPage],
    providers: [FileChooser, HMSMLText]
})
export class FormrecognitionPageModule {}