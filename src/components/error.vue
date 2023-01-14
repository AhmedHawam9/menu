<template>
  <lottie-player
    src="https://assets6.lottiefiles.com/private_files/lf30_UlXgnV.json"
    background="transparent"
    speed="1"
    loop
    autoplay
  ></lottie-player>
  <h4>{{$t("not_found")}}</h4>
  <p>{{$t("scan_qr")}}</p>
</template>

<script>
export default {};
</script>

<style>
    lottie-player {
        width: 450px;
        height: 450px;
        margin: 5rem auto 0;
    }
    h4 {
        font-family: "bold";
        text-align: center;
    }
    p {
        font-family: "semibold";
        text-align: center;
        unicode-bidi: plaintext;
    }
</style>