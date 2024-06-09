<script setup lang="ts">
const text = ref('')
const bin = ref('')
const hex = ref('')
const real = ref(Number.NaN)

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
  }
  else if (type === 'bin') {
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
  }
  else if (type === 'hex') {
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
        <span class="label-text">输入值</span>
      </div>
      <input
        v-model="text" type="text" placeholder="输入浮点数"
        class="input input-bordered input-primary w-full max-w-xs font-mono" @input="textChanged('text')"
      >
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">二进制表示</span>
      </div>
      <input
        v-model="bin" type="text" placeholder="二进制"
        class="input input-bordered input-primary w-full max-w-xs font-mono" @input="textChanged('bin')"
      >
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">十六进制表示</span>
      </div>
      <input
        v-model="hex" type="text" placeholder="十六进制"
        class="input input-bordered input-primary w-full max-w-xs font-mono" @input="textChanged('hex')"
      >
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">原始值</span>
      </div>
      <input
        v-model="real" type="text" placeholder="原始值" class="input input-bordered w-full max-w-xs font-mono"
        readonly
      >
    </label>
  </div>
</template>
