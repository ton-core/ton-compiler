/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type CompilationResult = {
    ok: false,
    log: string,
    fift: string | null,
    output: Buffer | null
} | {
    ok: true,
    log: string,
    fift: string,
    output: Buffer
}