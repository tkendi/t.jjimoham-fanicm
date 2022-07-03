import { Module } from '@nestjs/common';

// scalar
import { DateScalar } from '@/src/graphql/scalar/date.scalar';

@Module({
  providers: [DateScalar],
})
export class CommonModule {}
