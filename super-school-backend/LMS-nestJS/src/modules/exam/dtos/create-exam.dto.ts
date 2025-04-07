import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, IsDate, IsNumber, IsOptional } from "class-validator";

export class CreateExamDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    exam_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    subject_id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    grade_id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    division_id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    batch_id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    memo_url?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    start_date: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    end_date: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    start_time: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    end_time: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    status: string;
}
