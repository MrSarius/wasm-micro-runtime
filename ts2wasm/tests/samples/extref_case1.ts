/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function extrefTest() {
    const obj1 = {
        a: 1,
        b: true,
        c: 'hi',
    };
    const objAny: any = obj1;
    return objAny;
}
