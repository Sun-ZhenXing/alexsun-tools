<script setup lang="ts">
const text = ref('')
const bin = ref('')
const hex = ref('')
const real = ref(Number.NaN)

const { t } = useI18n({ useScope: 'local' })

function float32ToUint32(f: number): number {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setFloat32(0, f, true)
  return view.getUint32(0, true)
}

function uint32ToFloat32(i: number): number {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setUint32(0, i, true)
  return view.getFloat32(0, true)
}

function uintToHex(i: number, bitLength: number = 32): string {
  const str = i.toString(16)
  return str.padStart(bitLength / 4, '0').toUpperCase()
}

function uintToBin(i: number, bitLength: number = 32): string {
  const str = i.toString(2)
  return str.padStart(bitLength, '0')
}

function hexToUint32(s: string): number {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setUint32(0, Number.parseInt(s, 16), true)
  return view.getUint32(0, true)
}

function binToUint32(s: string): number {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setUint32(0, Number.parseInt(s, 2), true)
  return view.getUint32(0, true)
}

function textChanged(type: string = 'text') {
  if (type === 'text') {
    const f = Number.parseFloat(text.value)
    if (Number.isNaN(f)) {
      bin.value = ''
      hex.value = ''
      real.value = Number.NaN
      return
    }
    const u = float32ToUint32(f)
    bin.value = uintToBin(u)
    hex.value = uintToHex(u)
    real.value = uint32ToFloat32(u)
  } else if (type === 'bin') {
    if (bin.value.length > 32) {
      bin.value = bin.value.slice(0, 32)
    }
    if (bin.value === '') {
      text.value = ''
      hex.value = ''
      real.value = Number.NaN
      return
    }
    bin.value = bin.value.replace(/[^01]/g, '')
    const zeroFilled = bin.value.padStart(32, '0')
    text.value = zeroFilled
    const u = binToUint32(bin.value)
    hex.value = uintToHex(u)
    real.value = uint32ToFloat32(u)
  } else if (type === 'hex') {
    if (hex.value.length > 8) {
      hex.value = hex.value.slice(0, 8)
    }
    if (hex.value === '') {
      text.value = ''
      bin.value = ''
      real.value = Number.NaN
      return
    }
    hex.value = hex.value.replace(/[^0-9A-F]/gi, '')
    const zeroFilled = hex.value.padStart(8, '0')
    text.value = zeroFilled
    const u = hexToUint32(hex.value)
    bin.value = uintToBin(u)
    real.value = uint32ToFloat32(u)
  }
}
</script>

<template>
  <div>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">{{ t('input_value') }}</span>
      </div>
      <input
        v-model="text" type="text" :placeholder="t('input_float')"
        class="input input-bordered input-primary w-full max-w-xs font-mono" @input="textChanged('text')"
      >
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">{{ t('binary_representation') }}</span>
      </div>
      <input
        v-model="bin" type="text" :placeholder="t('binary')"
        class="input input-bordered input-primary w-full max-w-xs font-mono" @input="textChanged('bin')"
      >
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">{{ t('hexadecimal_representation') }}</span>
      </div>
      <input
        v-model="hex" type="text" :placeholder="t('hexadecimal')"
        class="input input-bordered input-primary w-full max-w-xs font-mono" @input="textChanged('hex')"
      >
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">{{ t('original_value') }}</span>
      </div>
      <input
        v-model="real" type="text" :placeholder="t('original_value')" class="input input-bordered w-full max-w-xs font-mono"
        readonly
      >
    </label>
  </div>
</template>

<i18n lang="yaml">
en:
  input_value: Input Value
  input_float: Input Float
  binary_representation: Binary Representation
  binary: Binary
  hexadecimal_representation: Hexadecimal Representation
  hexadecimal: Hexadecimal
  original_value: Original Value
zh:
  input_value: 输入值
  input_float: 输入浮点数
  binary_representation: 二进制表示
  binary: 二进制
  hexadecimal_representation: 十六进制表示
  hexadecimal: 十六进制
  original_value: 原始值
tw:
  input_value: 輸入值
  input_float: 輸入浮點數
  binary_representation: 二進制表示
  binary: 二進制
  hexadecimal_representation: 十六進制表示
  hexadecimal: 十六進制
  original_value: 原始值
ja:
  input_value: 入力値
  input_float: 入力浮動小数点数
  binary_representation: 二進表現
  binary: 二進
  hexadecimal_representation: 十六進表現
  hexadecimal: 十六進
  original_value: 元の値
</i18n>
