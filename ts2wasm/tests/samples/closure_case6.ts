/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function closure(x: number) {
    let z = 1;
    function inner1() {
        return z + 1;
    }
    function inner2() {
        return z + 2;
    }
    if (x > 10) {
        return inner1;
    }
    return inner2;
}

export function closureTest() {
    const f1 = closure(1);
    return f1();
}
