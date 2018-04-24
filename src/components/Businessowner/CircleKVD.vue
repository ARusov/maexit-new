<template>
  <div class="circle">
    <div class="circle__chart">
      <ul class="circle__list">
        <li class="circle__item">
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
              dolorem ducimus expedita.
            </span>
          </div>
        </li>
        <li class="circle__item">
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, rem.
            </span>
          </div>
        </li>
        <li class="circle__item">
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </span>
          </div>
        </li>
        <li class="circle__item">
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aliquid at deserunt eius expedita
              fuga ipsam ipsum maiores modi quaerat quam?
            </span>
          </div>
        </li>
        <li class="circle__item">
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem repellendus sequi similique?
            </span>
          </div>
        </li>
        <li class="circle__item">
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </li>
        <li class="circle__item">
          <div>
            <span>
              Lorem ipsum dolor sit.
            </span>
          </div>
        </li>
        <li class="circle__item">
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="circle__steps">
      <div class="circle__step">
        <span class="circle__step-number">01</span>
        <span class="circle__step-name">option</span>
      </div>
      <div class="circle__step">
        <span class="circle__step-number">02</span>
        <span class="circle__step-name">option</span>
      </div>
      <div class="circle__step">
        <span class="circle__step-number">03</span>
        <span class="circle__step-name">option</span>
      </div>
      <div class="circle__step">
        <span class="circle__step-number">04</span>
        <span class="circle__step-name">option</span>
      </div>
      <div class="circle__step">
        <span class="circle__step-number">05</span>
        <span class="circle__step-name">option</span>
      </div>
      <div class="circle__step">
        <span class="circle__step-number">06</span>
        <span class="circle__step-name">option</span>
      </div>
      <div class="circle__step">
        <span class="circle__step-number">07</span>
        <span class="circle__step-name">option</span>
      </div>
      <div class="circle__step">
        <span class="circle__step-number">08</span>
        <span class="circle__step-name">option</span>
      </div>
      <div class="circle__step circle__step--center">
        <span>Chart</span>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
  $circle-size: 700px;
  $item-count: 8;
  $central-angle: 360deg / $item-count;
  $skew-angle: 90deg - $central-angle;
  $item-size: $circle-size / 2;

  $color-1: #ff616f;
  $color-2: #ff8e26;
  $color-3: #feda62;
  $color-4: #aaeb2f;
  $color-5: #8ad09e;
  $color-6: #7fbbe0;
  $color-7: #9b93cc;
  $color-8: #ffaafb;
  $shadow-color: #575757;
  $shadow-size: 30px;

  $font-size: 14px;
  $line-height: 16px;

  $transition: .2s;

  $step-size: 700px * 0.15;
  $step-padding: 15px;
  $step-color: #ffffff;
  $step-number-fz: 50px;

  $step-icon-size: $step-size / 2;

  .circle {
    position: relative;
    width: $circle-size;
    height: $circle-size;
    margin: 100px;

    &__chart {
      width: $circle-size;
      height: $circle-size;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      font-size: $font-size;
      line-height: $line-height;
    }

    &__list {
      border-radius: 50%;
      box-shadow: inset 0 0 $shadow-size $shadow-color;
      width: $circle-size;
      height: $circle-size;
      z-index: 1;
    }

    &__item {
      transform-origin: left bottom;
      overflow: hidden;
      position: absolute;
      bottom: 50%;
      left: 50%;
      width: $item-size;
      height: $item-size;
      z-index: -1;
      box-shadow: 0 0 $shadow-size/3 $shadow-color;

      div {
        position: absolute;
        width: 150px;
      }

      &:first-child {
        background: $color-1;
        transform: rotate(-$central-angle) skew(-$skew-angle);

        div {
          transform: skew($skew-angle) rotate($central-angle);
          bottom: 30px;
          left: 65px;
        }
      }

      &:nth-child(2) {
        background: $color-2;
        transform: rotate(0) skew(-$skew-angle);

        div {
          transform: skew($skew-angle) rotate(0);
          bottom: 30px;
          left: 65px;
        }
      }

      &:nth-child(3) {
        background: $color-3;
        transform: rotate($central-angle) skew(-$skew-angle);

        div {
          transform: skew($skew-angle) rotate(-$central-angle);
          bottom: 80px;
          left: 0;
        }
      }

      &:nth-child(4) {
        background: $color-4;
        transform: rotate($central-angle * 2) skew(-$skew-angle);

        div {
          transform: skew($skew-angle) rotate(-$central-angle * 2);
          bottom: 50px;
          left: 30px;
        }
      }

      &:nth-child(5) {
        background: $color-5;
        transform: rotate($central-angle * 3) skew(-$skew-angle);

        div {
          transform: skew($skew-angle) rotate(-$central-angle * 3);
          bottom: 45px;
          left: 35px;
        }
      }

      &:nth-child(6) {
        background: $color-6;
        transform: rotate($central-angle * 4) skew(-$skew-angle);

        div {
          transform: skew($skew-angle) rotate(-$central-angle * 4);
          bottom: 30px;
          left: 80px;
        }
      }

      &:nth-child(7) {
        background: $color-7;
        transform: rotate($central-angle * 5) skew(-$skew-angle);

        div {
          transform: skew($skew-angle) rotate(-$central-angle * 5);
          bottom: 80px;
          left: 40px;
        }
      }

      &:nth-child(8) {
        background: $color-8;
        transform: rotate($central-angle * 6) skew(-$skew-angle);

        div {
          transform: skew($skew-angle) rotate(-$central-angle * 6);
          bottom: 50px;
          left: 65px;
        }
      }
    }

    &__step {
      width: $step-size;
      height: $step-size;
      padding: $step-padding;
      background-color: $step-color;
      box-shadow: $shadow-size / 9 $shadow-size / 9 $shadow-size / 8 rgba($shadow-color, .4);
      border-radius: 50%;
      position: absolute;
      text-align: center;
      cursor: pointer;

      &:hover {
        &::after {
          width: $step-size * 1.4;
          height: $step-size * 1.4;
        }
      }

      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        width: $step-size * 1.2;
        height: $step-size * 1.2;
        border-radius: 50%;
        background: rgba($step-color, .4);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: .3s;
      }

      &:first-child {
        color: darken($color-1, 15%);
        top: -$step-size / 4;
        right: $step-size * 1.5;
      }

      &:nth-child(2) {
        color: darken($color-2, 15%);
        top: $step-size * 1.5;
        right: -$step-size / 4;
      }

      &:nth-child(3) {
        color: darken($color-3, 15%);
        bottom: $step-size * 1.5;
        right: -$step-size / 4;
      }

      &:nth-child(4) {
        color: darken($color-4, 15%);
        bottom: -$step-size / 4;
        right: $step-size * 1.5;
      }

      &:nth-child(5) {
        color: darken($color-5, 15%);
        bottom: -$step-size / 4;
        left: $step-size * 1.5;
      }

      &:nth-child(6) {
        color: darken($color-6, 15%);
        bottom: $step-size * 1.5;
        left: -$step-size / 4;
      }

      &:nth-child(7) {
        color: darken($color-7, 15%);
        top: $step-size * 1.5;
        left: -$step-size / 4;
      }

      &:nth-child(8) {
        color: darken($color-8, 15%);
        top: -$step-size / 4;
        left: $step-size * 1.5;
      }

      &--center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: $step-size * 1.2;
        height: $step-size * 1.2;
        padding-top: $step-icon-size + $step-padding;
        background-position: center $step-padding;
        background-size: $step-icon-size $step-icon-size;
        background-image: url('./career.svg');
        background-repeat: no-repeat;

        span {
          font-size: 30px;
          font-weight: 700;
        }
      }
    }

    &__step-number {
      font-size: $step-number-fz;
      line-height: 1;
      font-weight: 700;
      display: block;
    }
  }
</style>
