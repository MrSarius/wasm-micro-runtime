/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function objTest() {
    const obj1 = {
        a: 1,
        b: true,
        c: {
            d: 4,
            e: {
                f: false,
            },
        },
    };
    return obj1.c.e;
}
