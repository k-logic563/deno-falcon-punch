import {
distinct,
sample,
} from 'https://deno.land/std@0.123.0/collections/mod.ts'
import { equal } from 'https://deno.land/std@0.123.0/testing/asserts.ts'

const phrase = ['フ', 'ァ', 'ル', 'コ', 'ン', 'パ', 'ン', 'チ']
const catchPhrase = 'show me your move!'
let count = -phrase.length

const generate_falcon_punch = () => {
    const stack: string[] = []
    while (true) {
        const picked = sample(distinct(phrase))
        if (picked) {
            console.log(picked)
            stack.push(picked)
            count++
        }
        if (equal(stack.slice(-phrase.length), phrase)) {
            console.log(catchPhrase)
            console.log(`Your trying count is ${count}`)
            break
        }
    }
}

generate_falcon_punch()
