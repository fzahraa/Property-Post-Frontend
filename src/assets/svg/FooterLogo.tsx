import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="75"
      height="95"
      fill="none"
      viewBox="0 0 75 95"
    >
      <path fill="url(#pattern0)" d="M0 0H75V95H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00467 0 0 .00369 -.002 0)"
            xlinkHref="#image0_13_117"
          ></use>
        </pattern>
        <image
          id="image0_13_117"
          width="215"
          height="271"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAEPCAYAAADRZ1FDAAAACXBIWXMAACxKAAAsSgF3enRNAAAam0lEQVR4nO2dPZfbuJKG6dkbbNa82Wat+QWtyTZrOtvMfX9By9lmlrPNrA5vZHW2G42U3WzkbDNLv2CkbLNRZxNS2WbaQ09hFg0DJEhUgSD5Pufo2N1N8QPEi49CoerN9XrNAsizLJtnWVaEnASABCmzLDtmWbbvemt/6fCdSlAL+tyhVoAJ8CXLsl2WZZs2j9qm55plWbbKsuwRtQlMlEuWZWv6lE1F4CuuJQnrBrUKgOyFRm61Q8YmceXUHd6jPAH4jmfqeKzUiSsnZWJeBYCbLfVi3/GD4ysQFgB+PLoMHTZxQVgAtMMqMJu4VhAWAK2pBPagf8mcc1WLwV9RrgB04kJLVt/M9GbP1WqRDADwihtaA8tMcVUWj1uUFQBBPFLv9UpcTns9AKAV37Sk5lyV0n5D+QHAQuXBMVM91wPKFAA2qunVXIkLW0YA4KVQ4pqjYAFg5c+eC1ZCAHj5NufKUagAsJP/gCEhACLcubziAQCBQFwACAFxASAExAWAEBAXAEJAXAAIAXEBIATEBYAQEBcAQkBcAAgBcQEgBMQFgBAQFwBCQFwACAFxASAExAWAEBAXAEJAXAAIAXEBIATEBYAQEBcAQkBcAAgBcQEgBMQFgBAQFwBCQFwACPEXFOxgOGg3WsX3v5t6gaQOxJU2B0pgvbPcZU5JC1fIUpMmGBamSZX28y0lJbQJq6LMsmxDKXc/Zll2mXqhpQbElR7PJJh9iztb03cOHsf6UAl1m2XZexL5G6HPT3SN7RgbhyrheNU6fk3gXqbOhbLAbwLLoRomfur43Rf6fug9dGVBDcVNT9dnBT1XGpxoCMhRqStx/K1DT/CFcrX1JaxMG+Zy9cC9AnH1zxcS1pHxTnZ0zpPn8VsyjpQJlEdJ9/4lgXsJAuLqlyfBSn2kSrptOO5Ew9HUWNAwdbBAXP1wIUPBSvjqJVXSjzXHLBPpsUzUvQ8WiCs+J5rbtLEGhrImy5w5DztEvo+27Ic8/4K44rKlodq5h2sfyVigz8P6NF74MoR7tAJxxeM9DXP6HIKV1Gs+08+uBeqUGMI9WoG45LnQkCylFnhJ95TiXMukbGH1TAqIS5YDDcU4zexcpHhPLvoYRgcDccnxTPMrrt5BiXRHTrtTYkgNwZ9AXPxcaH7FuXb0QBWs2mbyjqxo81QeGNiBuHjhdGNSVGthvxj+dncksIfIz1dd8xr4Sdn0zwrExQe3G1NOFdHlhHtDolvHflDgB8TFw0dmN6Y5ifTe49gPJMKpzcOSB+IKQ7kxcfYeCxJLm93F92RRwzwsISCu7ki4MVVztZ877meqvvPr0P3xxgTE1Y0tCYtr/UWZ2R8ZzvUziRTDxJ6BuNrznrl3KDQzOxeP1KPOIpQHcABx+fMi4Ma0pBALEtva70i0sc31gIC4/DhoFjwOcvK0+Cx838pcL71vDFiAuJrhdmNSRpB3kjdt8GmiblO9AnG5uVCgF243pn1P0XI53KYwh2sBxGXn1BCQswtrixtTbELdphDZtwUQ1/dIuTF94LzJAOA2FQmI6zV9ujHFBm5TwkBcfyDlxvRr4kOpNm5TEGFLIC5ZN6YhoNymmgw3xUCeJxmmLq6U3Zhi87nBXJ9i4NCkmaq4LgNxY4rNO3oGs1yWic4bk2aK4noR2C0s6cYUm1sa0qpdw+cIniSjZGqZJQ/M1sCcRBrT2yIm6K0CmFLP9TQCNyYwIKbQc11oDsHpbTGqJG1AhrGL60RC4Ix7t07I2wIkzJjFtWVOj6O2iWAeArwYq7g+MntbqPkVhoHAm7EZNCTdmCAs0Iox9VwnZmtgTiIdorcFSICx9FzKjYkz6cEewgIhDF1ccGMCyTJkcUm4Ma1G5MY0JgaZvGGo4pKKxuRKegD6ZZCJx4coLrgxTZMHCsEwGIYkLhWNiTMG36LHaEygHSUJ7Gko5TYUcandwtzRmLomPQD9saK1zEvq72AI4trSMJBrt3Bq0ZimBof7mIq/mHSW/9TF9ZGGbpzzqzP8A3uHIx7Hmc6zTfUhUxXXhZIewI1pnHDNm0t6rx9TLKUUxXXSAr1wkA8sGtMUuGden1xTY5zUPCw1cT3DjWkyPDIL7EjvO5l5WCriUm5M3EkP4MaUNo+aKDgoqXF+TuGpUxCXlBtT30kPgB8qSR9n0NElNda9DhP7FtcXuDEBagS/MjsIbEiwL30VcJ/iehJKegA3puHCnaTvSPWiF7epPsQl6caE/FHD550mCg56c5uKLS64MQEfbqmx5NynF91tKqa4JNyYjnBjGi031GhyGrqiuk3FEpeUGxPM7ONHmeu55mEqH5m425S0uCTcmJZwY5ocd5ovIRcLMteLISkuKTcmZNyYJspcz+losJF0m5ISF6IxASmakvS1RcxtSkJcX5itPHBjAibvNOMEB6XEgjO3uE4C5lO4MQEbd8zmerUexga3uLgSH8CNCfigzPVcBrMj52Izp7i2TPHl4MYE2vKB6h7HPGzNZeDgFBfHYh/cmEBX7rU1rBBKroVrLnFdGHotuDGBUG5oDTR0HsbinsclrpC1LLgxAW5C3aZYwmf3La4CbkxACG63qdb0uZ9rhqQHQJg75nzYreBKftdlEnkms+fQze2HAWThmFMLPpugsYhz3bUVb67Xa0E9SAiXgO536N4XPzJuo4lFQYIr6DPW0cNzR1/EORlGguAaFt4EmEAfhhD328HTAIWVUU+7prLPaWf4dsDvwcYpwMmXxfuec87V9UHOfXbdAVyYt9L0yY7ewYz23vUW1IWJS6ArE4vnPae4HgPiz+1SiTXXAi5Xr5QoqcGY0V6noYpsETCiKLjmpdzWwpCWfJl61gqNF+bt5ymyoaH+YPJhEc+Bi8Bs75VbXO8Cu+OhzL+GOIztQkk7E34aSMMXMs/K6FnZrKkS61ybAMvhEOZfQzC9c3NMPV0Pwzyr4F4WkhDXTWC3nPr8i3Ob+ZAoY8SdCGAZMM/KmcP9fUPKQ+M+MOhnqvOvbZ8r/omwSVBg28C50k5irY9rEdnF24AhlMqy73roE/19Fmnv14WuNTYLYVcWwjnPLlpvUmfBO9Hfu76XpVjQo0pcVznO1+s1v16vWcfPwnJn++v1OjfOZzuOm1XAc4z1I1XupeMdnz2Oa/OZS1YYaXFV7AIr1kY7V10F39TcQyihjcSYP0uB8l44yiun+tR0nM8nt4iVFelhoeJjwBqYmmyuGyadks/xfgLrWiFsGMPe+fipLmnaEGJZ3klPJ2KJK6O1EmljwFXgnAfmSK9jRG145VgjilHecvMsDa4tJz7smAOF2ngR2FIRYvVMQZQx1uSUmT5GIx3KPFbU5pjiuqXhA2tsOIMzs7i+dKyccxrG3jPeSwgv9Bx7auQkGrg9rU+mHK5BZD3LReydyO8Gtgjb5V5XtBcoFWFl1OA8kun8TI0cV5JvnVXi7mubmJtF+9jm/5kxDLEkzy1X/FU8kNR3Vt+Q0H6j3pUzxkSZ8DacZexYmH3F0OAMpC/BpcVcK6cK9XWAW+g/MKdIzTiDajISbZ6l05e4bhPfaLjynJc8UG815LBwt0yx/hSp9V5R51k6fUZ/ekzUA/7Fo3KolEZjShLxM+P7SGlNcN3XiKJPcWX04KnNv5qMGEsaSqVksOCCS2BVb/4lgedZ9JnTrW9x3SQ2/zrUDCFUgojPI4+1yNXg9TIU05B2LG6kb3Fl1GVzT6q7YjNi5Jp5fQqRgW+YhnV9iqt3YWWJiCsjge17XgOzpUAqSPhTyxN2F+iZUlH2sCcv1xJ69E4q4sqoxfxMFVzSi8OGaXpXFqYhmte5WDIM12OFQ8ipt0oqoUdK4lLckxUutOVsw1pbMFZhuaaefO+GwbgRS1w76q2SaghTFFdsLlqsvj1yhL0iVFxDjEbMBsT1x/BnzOb1EO4CfRAnHW8E4vpDWJ/QWzkJnf+OKf58KyAuJN5rInSJZLK9F8QFmpDYmjIJIC7QBOahHYG44lMtrL6J8PnrgBJbjBKIKz4x1n5yug7mkz0CccVHWlwQViJAXPGRdGiVEFaoKT3lHeeiQFxxkdzjJNVjhZrSJ9uDQlxxkRoSSg4FQ1yYJttrZRBXdCSGhNJzrJCeawhRvsSAuOLxIuDIOotgvAhpECYtrpgRd6cO95CwKX8ZB6ENAnouEAXOIWEMYWUMIdImncAC4ooHV88VS1hZYCyN2YR3cX8D4orDgSn5QUxhbQPvOXaohuSAuOLA0WvFFNaFIVhQigFfowJxxSF0vhVTWBnNtUJ6rWpIOHn3K4hLngvDWlFMYR0YggMNKU2UGBCXPKHrRDGFdWEYzuUYEv4BxCVPyHzrIbKwCoaF7pj3nDQQlzyh4orFkineRcx4k0kDDw1ZTgE9QR7JKHAhEXNYNJdTX9vSQc8lS0iFjeHdcKLrcAgrR6/1GohLlhBjhvSQ8FlLNMHBCnOt12BYKEuKPdeBcX6lKAaeulYEiEuOkF3HEn55X2hxmNs7P08sTWsyQFxy9G0lvNA97OjD4dtoYwMjhh2IS46Q+dYucNh2FBSTzhKpltxAXDKEbjI8DyD9TkHJCoEDWAtliJX0rS/mCSQUTx6IS4YxV7zY/o6DBeKSYaw9F4TVAoiLH65dx6kBYbUE4uJnjL1WtYXkVwirHRAXP2Obb60pCTtoCUzxvITuOk6JOS0QT367flfQc/Eyll5rRcNACCsA9Fy8DH2+9UDDQLgzMYCei5ehikvt6foFwuIDPRcfIbuO+2JB/oEY/gkAcfExlF6rIFEhkIwwEBcfqRoz5vQpIKi4QFw8XBLYdayfY06bGO8Zzgs6AnHxECKsSghfU3oYwMMPE9geEYPUozyB+BxgiuchZL4FcY0UJa6XqRdEAKG7jrFNfpyclbgwNOxOyrEJQX8cIa5wMN8CNnZKXIiH0B2IC5ic9GFhGRjEcqqE7DpG9sXx8i1Iqm4tXE+9RDoAKyEwudjEtaeWGPgzlNxbIB5/5pM217mQbtOf0F3H6LnGx4ueRskUV7Ve83HqJeRJaK5jONCOj1ejEZuHRtWtbadeSh5gSAh03psjGZf705LMicANFo+BYmtLo+QSV0lzApjn7ZwCTPCxch2DODy5bBV1jrsltbBPeEnfgYVjOYbiLVQZtP5Wlwfaxyu++vJbOPe+AkPCaXPwyfTiu+VkTx4F7yGyJHYdg344UEdT+OyEaLufa0Mie0vZ4KcotNBdxwhdNixONDX6UQtB58Wb6/Ua+qQ5VZqMuVXed6jICxK/JF3uSzHDQn0jfb/3UjOpB83/OMQFALCAbf4ACAFxASAExAWAEBAXAEJAXAAIAXEBIATEBYAQEBcAQkBcAAgBcQEgBMQFgBAQFwBC2JLftfVsPwZseQfDZ9bSI70MDEk3GGxe8V3c5F9or9caQpsc1U71Ty0f+kK7eFeB6ZeShmtYeEsFfMZOW3GuxmeI5V3FbHzMsuy3uhgUCVFYyr0R7jnXDeX3RZwI4MsnW1iyMeCTcPxQsyNz7siMqMIBYIg4PV5qxJJTw2uGOnikYeKoUln5iGvf0HXPqFD0WHw3tPUamVN4mFPFtDE3fte3weDcUF+WVC8+GL9fJSguNeQ2yzizDMfP5vzRR1xNnLVoOHr88wcqxIURN2Kj9WwP2hBy42jx1DGmRepIwne9kLrrLi0FdqRztYmbUHdvm5pKvjauv6RjVYyNwvh9dfy941yfjZ8P9P2dIcidZ2NXGOIoBYb5S3pWfdRzR78zDRw5lcmDpQxe6H1tPN7bnK5bWHrOF6M+qXv4WnM+829P3zUqlbXQ+JisLMfYPmvLdzP6vk7188LjOg/X6/VsOc6kOqaw3I/tukuP8+2v1+u84VkLz3urzjWzfH9vHFc4yqRwHN90Tdvzl57vcWN8r+n9m9fZe16nqHlevQ6Uns+9u16veYu6WcfiatdCHd+VE6dBw3d+VbVAPzccU7Wwv3iGIbulVqTJ6rS0tPI27qkFsw0FMmpFv3re2z21iK5z6edsKpO2mL3UjUfkqRnNf3SkjA1NPc2C6oBvNph3dE5z+LyxDEFD780LjmFhW5ripC9rCuNSU9hqKcBVGWzfc53vRhOYPkypaxhU4grz+W60oKquBsis0CZLrdKYw5GPxvCz1P7dGudeNojFFN9WcB2qrsFpKufSkYbpzmgY55ayvRhDvxkdp96b/sxvtfOYDfNb4+fvy4lxWHg0vnd2DBsUJf2toM+MPjY2xlCtoGGA7Zwzj+sutONyGn6Y9381hji5Y4iyNMohdww/NzXDQr3MllqZ2IY5JrYhsfrMWx5vPl/dsaHDQtv7mdeU88ZSHoXj2FXDNVxltXEM421D2MZn5BJXXWWyPeDRUXHM8f7VqJQ+x69rrlvWFO7M8aLU8bY50aLm3mzHqxdnE5erTELEZbuWqzzN+z12FImPuOaWslZzwqaGyedcrobd95lYxBUy51JrFnvHXKbJHGsbIplWqS8N84SFJc1RnWWrqLHgubxL1PlsQ6a6IdbGkuOszpviQWhd0Jx7PTp8AZcN3+OgoPPuLUM6dT3z/Z0a6sDR8vdbx7Dzjt5LFCcHnznXpw6+Y881Y/UXx4RxVlPgdWwMk67L0HDyWP85kilbN/nOjX8VuYcRxRSLy8H1IDi32VGZ6+WyMO59bswV6xaCm7jv4J960t61Wc4+a1+2Y1QWErPuPmrzMFUnjsY8jAUJg8bW0grquB7AVvF8rDY2wdh6CN+F1b0hLmVIMIX/zuGdUodrEi+dk2ptjC6WhrjM9xXTHelE70s1RGY5+5aN2SjO6Dne1xhH7ujzSOWjekmWRXhOU/wLJQNDogE3Li8LaTZkJVPoZvncYlGL4VlzoYXXecNw2LfMXKOCDVn2fLKkmtbGIHx6rpea3ka5fOwY1G67hk/KFltBHC29l2+Bmd9TL94029f5XLroK2tiSe/IZpY3e61t4Nzv0lAX9towzMbJGKIWHkPD3DId2Bv/32sZeQr6d+ZYOllxzMt8xLWJtC3gbKnAC8/FRp0XR+W4owKte/Fzi4uNnk7GHAamsF3Ct2VfGeK6o0pmll9or2Vr2Np+X6/wan5YJ3jbNMTWWJeWFEUzemb93frcf97UCKW2zd9soR4bhplmodjOoVPX5eeOucbO+Fdx7zE3mUewTPme/2wZGm2MFv+QwC5hs0xvHJ4XioXFaKEbiGy+nzpnhzdLE83lzrTOxbUO4lpEXhnrU/OadSyfReQHbU2pzSKyzZ/QtriZG9c318PMtac2ZWxbI9vTOXb0fK71Mtt6jU7duh3nOleXZzzSGthce2cun0G19qcvSG+M967XOdu7b9KFOueKvv/dc6cmrqzBufbc4Mi5qLmu63wubAvOdZVTFbDr/vRzhYjLtjhdVw7mx/XM5xb3IC0ul5eGD3pZ2pwMfLAtWvuc65V3R4rRn9a0TmbjtqbLfupgQnatiV207R46ezLt2rijoaLLh5GLDRkd6qhbCnHNE1PaDVzSvKdtzm1z20eXIfnJUX5Li1OA7Zg/STW02pLM+j6Fq5YAmowLB3JybUKtu7gqW/X7n+h8PhwaPEO6sKCKZCufQ4O4TLN8Rj+ntrFV7SZ48micVJZ9sw7MqaH2adzU0kDhMFQowW8d59uaZWiL/tS4w7Il5qbFY8PLN9E3JKpJbaktAbgMGGZUIlXJ9c2Sbc5nQxks9B2rSkR1GybNzZKujaI+5Npaka+Ad4YhaBuwPmmGVpPYCZ1r5nP13vaa9c/nesoEn2vnOGr3u2+5BDHTNnda9THmhOMucU2dwrJt5ccxhzjrC0TcHS+qddcblJmlh5T0a5w0fWyWBHFYkoHlK80Rzo6Nqm2G6KAF6LnGSW6I5sYhrKephJbuA4hrnOQNornQksIQot0OljEPC8+GuXxKLbTa+Kl/Ms0ytsE8S54xWwsB6BUMCwEQAuICQAiICwAhbAaNeY2fmenMqibMsaxO5r2VmstSjIwqXZ/XteGzq8eIcr0J3dnMdR5fHugdTsJKaROXvpN0ZfzbN8rrQN1Pru1WZol7IES1mPuG8dQzzxAIsc7ji2oYJ2Gt5BoWFloWjbpt50oIOyY/v1JLFevabepzTZVdZKNl4OiLuZYC17ZlQs+EsnI8k/k8dbt41Xlcjrtc70ydZ13Tc80s92H7nWKpZTlxNa6Fdo59g0eKeZ2ipi4UWlYc6/1xiGupdfVljVe5qiwqMMqOqRLnNedR11w0XHOmVepzw7ZyaVQvsndsUVdrVeo+XYF9lB9hWdMz6eexrQOuLO+s6whhRR8VlNNWviq318z4ng11L0tN/LZzFprH+5Ku7Tqnr7iUsFTjZYaq+wOPXaZ1u2RVzHb9d64dreb284UWetr3o1L37LXPuWbnbZtrzrUY7RvHOYuOO7Ovxj3va+75SvdYF9ra5z7059k5wng3nYfjnanr6DuU6+rVQtsJrEIr2Lbmm/VsbYnbr661NL7r2i1t/n7lCBe+o5ABdffD4qFhtnh1Y2mzV+viNbHXPLvX1GrU7cHyuebaSBhXCMwJfIdUb+mZ1P4yV+jvOjaaoSI39q61heOdqVGNOVdeW55NZfnPtR7TFrk4t/TIrnvTf8/xXnOtx3KeN6b7U2nEQ+/6ss9aoS60mImuUFo+11wY6YL6zOW817aKbGrS39aVnxpO+pR103sIfWeqUTGfIXcMp0ptuLVwNEpnbWewwpaVsi3m8z04htSlNkzWr/+KmOtcG63SrGoSH7ThqOXStb1432uqeOFqfiaxDcP09Sss96wErqcXdVWYD8YuaJO9Nr9w5f8q6Ty2NLaZljRBlV+XmIQr7Tz6Z1VTzmva6OqaU54NI8tKe38hlJqRaFXTmKy1uePClQf6n1arRit70zb/0vJ3W/dcFcb/0s38S0CCafN61bX+mX7/e8drKnHq+ZnresO2LeQbbU1J//yP0Uv+rlm+/jXLsr9nWfYPy/lUANXCcZ//oOd9oL//l+Va6npVHI5/c5xHL7/fO8ZRr57zPy2/V++r+te8r+qaKhmEaxRRvbPqGf+dfv6PLMv+23Gs6ul0bM9RnbMqi+pT3XN1Ptt3q99Vf1M9a3Wf1fX/nyzL/g+xwOd4H3xtCAAAAABJRU5ErkJggg=="
        ></image>
      </defs>
    </svg>
  );
}

export default React.memo(Icon);